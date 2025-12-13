provider "aws" {
  region = "ap-south-1"
}

# Define in variables.tf
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "staging"
}

variable "bucket_name" {
  description = "S3 bucket name"
  type        = string
  default     = "my-terraform-bucket"
}

# Reference with var. prefix in main.tf
resource "aws_s3_bucket" "demo" {
  bucket = var.bucket_name  # Using input variable
  
  tags = {
    Environment = var.environment  # Using input variable
  }
}

output "bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.demo.bucket
}

output "bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.demo.arn
}