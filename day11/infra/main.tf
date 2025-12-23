locals {
  build_dir = "${path.module}/${var.build_path}"
  files     = fileset(local.build_dir, "**")
}

# S3 bucket (private)
resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name
# force_destroy = true   # destroys even if objects exist (use with care)
  tags = {
    Name = "static-site-${var.bucket_name}"
  }
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# CloudFront Origin Access Identity (OAI) so CloudFront can read private bucket
resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for ${aws_s3_bucket.site.id}"
}

# Allow the OAI to GetObject on bucket
data "aws_iam_policy_document" "s3_policy" {
  statement {
    sid = "AllowCloudFrontServicePrincipalReadOnly"
    effect = "Allow"

    principals {
      type        = "CanonicalUser"
      identifiers = [aws_cloudfront_origin_access_identity.oai.s3_canonical_user_id]
    }

    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site.arn}/*"]
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {

  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

# 4) Upload all files from build_dir to S3
resource "aws_s3_object" "assets" {
  for_each = { for f in local.files : f => f }

  bucket = aws_s3_bucket.site.id
  key    = each.key
  source = "${local.build_dir}/${each.value}"
  etag   = filemd5("${local.build_dir}/${each.value}")

  # try to set content_type based on extension (fall back to octet-stream)
  content_type = (
    try(
      lookup(var.mime_types,
        lower(regex(".*\\.([A-Za-z0-9]+)$", each.value)[0]),
        "application/octet-stream"
      ),
      "application/octet-stream"
    )
  )
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "cdn" {
  enabled = true
  is_ipv6_enabled = true
  comment = "cdn for ${aws_s3_bucket.site.id}"
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id   = "s3-${aws_s3_bucket.site.id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-${aws_s3_bucket.site.id}"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 10
    default_ttl = 3600
    max_ttl     = 4000
  }

  # For SPA: return index.html for 403/404
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    Name = "cdn-${var.bucket_name}"
  }

  # Ensure CF created after objects are uploaded to avoid origin-empty race
  depends_on = [ aws_s3_object.assets ]
}

# Optional: invalidate CloudFront cache using a null_resource + local-exec (requires aws cli configured)
resource "null_resource" "invalidation" {
  # change on every apply (so invalidation runs whenever you re-apply)
  triggers = {
    always_run = timestamp()
    # you could add other triggers like build checksum if you prefer
  }

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.cdn.id} --paths '/*'"
  }

  # run only after distribution & uploads
  depends_on = [ aws_cloudfront_distribution.cdn, aws_s3_object.assets ]
}
