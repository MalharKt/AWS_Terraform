# outputs.tf
output "bucket_names" {
  description = "All S3 bucket names created by the for_each resource"
  value       = sort([for b in values(aws_s3_bucket.buckets) : b.bucket])
}

output "bucket_ids" {
  description = "All S3 bucket IDs (Terraform resource ids)"
  value       = [for b in values(aws_s3_bucket.buckets) : b.id]
}
