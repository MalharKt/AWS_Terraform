# ASSIGNMENT 1: Project Naming Convention
# ==============================================================================
# Functions: lower(), replace()
# Uncomment to test
# ==============================================================================

# locals {
#   # Transform "Project ALPHA Resource" to "project-alpha-resource"
#   formatted_project_name = lower(replace(var.project_name, " ", "-"))
# }

# resource "aws_resourcegroups_group" "project" {
#   name = local.formatted_project_name

#   resource_query {
#     query = jsonencode({
#       ResourceTypeFilters = ["AWS::AllSupported"]
#       TagFilters = [{
#         Key    = "Project"
#         Values = [local.formatted_project_name]
#       }]
#     })
#   }

#     tags = {
#     Name    = local.formatted_project_name
#     Project = local.formatted_project_name
#   }
# }

# ==============================================================================
# ASSIGNMENT 2: Resource Tagging
# ==============================================================================
# Function: merge()
# Uncomment to test
# ==============================================================================

# locals {
#   # Merge default tags with environment-specific tags
#   merged_tags = merge(var.default_tags, var.environment_tags)
# }

# resource "aws_vpc" "tagged_vpc" {
#   cidr_block = "10.0.0.0/16"
#   tags = local.merged_tags
# }

# ==============================================================================
# ASSIGNMENT 3: S3 Bucket Naming
# ==============================================================================
# Functions: substr(), replace(), lower()
# Uncomment to test
# ==============================================================================

# locals {
#   # S3 bucket names: max 63 chars, lowercase, no spaces or special chars
#   formatted_bucket_name = replace(
#     replace(
#       lower(substr(var.bucket_name, 0, 63)),
#       " ", ""
#     ),
#     "!", ""
#   )
# }

# resource "aws_s3_bucket" "storage" {
#   bucket = local.formatted_bucket_name

#   tags = {
#     Name        = local.formatted_bucket_name
#     Environment = var.environment
#   }
# }

#  resource "aws_instance" "validated_instance" {
#   ami           = "ami-0f5ee92e2d63afc18"
#   instance_type = var.instance_type

#   tags = {
#     Name = "validated-instance"
#     Type = var.instance_type
#   }
# }