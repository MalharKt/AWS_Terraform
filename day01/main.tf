provider "aws" {
  
}

resource "aws_s3_bucket" "demo_bucket" {
  bucket = "retail-bucket25"

  tags = {
    Name        = "My bucket-2.0"
    Environment = "dev"
  }
}