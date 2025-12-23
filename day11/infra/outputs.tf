output "s3_bucket_name" {
  value = aws_s3_bucket.site.id
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
  description = "Use this domain to access your site (no custom domain)."
}
