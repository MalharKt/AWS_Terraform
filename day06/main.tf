            #-------for count-----------
# resource "aws_s3_bucket" "buckets" {
#   count  = length(var.bucket_names)   # or simly use 2 in count
#   bucket = var.bucket_names[count.index]

#   # optional recommended settings:
#   #   acl    = "private"

#   #   versioning {
#   #     enabled = true
#   #   }

#   tags = {
#     ManagedBy = "terraform"
#     Name      = var.bucket_names[count.index]
#   }
# }

#---------for for_each------------
resource "aws_s3_bucket" "buckets" {
  for_each = var.bucket_names         # iterate over the set

  bucket = each.value     

  tags = {
    ManagedBy = "terraform"
    Name      = each.value
  }

}