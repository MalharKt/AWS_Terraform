terraform {
    backend "s3" {
    bucket = "demobknd23"
    key    = "dev/terraform.tfstate"
    region = "us-east-1"
    encrypt = true
    #use_lockfile = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "demo1_bucket" {
  bucket = "retail-bucket26"

  tags = {
    Name        = "My bucket-1.0"
    Environment = "dev"
  }
}



