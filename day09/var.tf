# variable "environment" {
#   description = "Deployment environment"
#   type        = string
#   default     = "prod"
# }

# variable "project_name" {
#   type        = string
#   description = "Name of the project"
#   default     = "Project ALPHA Resource"

# }

# variable "default_tags" {
#   type = map(string)
#   default = {
#     company    = "TechCorp"
#     managed_by = "terraform"
#   }
# }

# variable "environment_tags" {
#   type = map(string)
#   default = {
#     environment = "production"
#     cost_center = "cc-123"
#   }
# }

# variable "bucket_name" {
#   type        = string
#   description = "S3 bucket name (must be globally unique)"
#   default     = "ProjectAlphaStorageBu cket with CAPS and spaces!!!"
# }

# variable "environment" {
#   type        = string
#   description = "Environment name"
#   default     = "dev" 
# }

# variable "instance_type" {
#   type        = string
#   description = "EC2 instance type"
#   default     = "t2.microkvfdmvfmvfmvfmbfbmfk"

#   validation {
#     condition     = length(var.instance_type) >= 2 && length(var.instance_type) <= 20
#     error_message = "Instance type must be between 2 and 20 characters"
#   }

#   validation {
#     condition     = can(regex("^t[2-3]\\.", var.instance_type))
#     error_message = "Instance type must start with t2 or t3"
#   }
# }