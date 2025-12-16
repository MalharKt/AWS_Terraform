# variable "bucket_names" {
#   description = "List of S3 bucket names to create (must be globally unique)."
#   type        = list(string)
#   default     = [] # you can override via -var, terraform.tfvars or environment
# }

variable "bucket_names" {
  description = "Set of S3 bucket names to create (must be globally unique)."
  type        = set(string)
  default     = []   # override via -var, terraform.tfvars or env
}
