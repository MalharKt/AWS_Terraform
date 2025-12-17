#---------------create_before_destroy-----------------------
# resource "aws_instance" "web" {
#   ami           = "ami-0ecb62995f68bb549"
#   instance_type = "t2.micro"

#   lifecycle {
#     create_before_destroy = true
#   }
# }

#--------------------prevent_destroy-----------------------
# resource "aws_s3_bucket" "prod_data" {
#   bucket = "my-prod-critical-data-12345"

#   lifecycle {
#     prevent_destroy = true
#   }

#   tags = {
#     Environment = "prod"
#   }
# }

#--------------------------ignore_changes-------------------------
# resource "aws_instance" "web" {
#   ami           = "ami-0ecb62995f68bb549"
#   instance_type = "t3.micro"

#   tags = {
#     Name = "web-server"
#     Env  = "dev"
#   }

#   lifecycle {
#     ignore_changes = [
#       tags["Env"]
#     ]
#   }
# }

#-----------replace_triggered_by-----------------
# resource "aws_launch_template" "app_lt" {
#   name_prefix   = "app-lt-"
#   image_id      = "ami-068c0051b15cdb816"
#   instance_type = "t3.micro"
# }

# resource "aws_autoscaling_group" "app_asg" {

#   min_size         = 1
#   max_size         = 2
#   desired_capacity = 1
#    vpc_zone_identifier = ["subnet-090143a377a7a9566"]  

#   launch_template {
#     id      = aws_launch_template.app_lt.id
#     version = "$Latest"
#   }

#   lifecycle {
#     replace_triggered_by = [
#       aws_launch_template.app_lt
#     ]
#   }
# }

#-----------------precondition--------------
# resource "aws_instance" "web" {
#   ami           = "ami-0ecb62995f68bb549"
#   instance_type = var.instance_type

#   lifecycle {
#     precondition {
#       condition     = var.instance_type != "t3.nano"
#       error_message = "t3.nano is not allowed. Use at least t3.micro."
#     }
#   }
# }


# variable "storage_gb" {
#   default = 100
# }

# resource "aws_db_instance" "db" {
#   allocated_storage = var.storage_gb
#   instance_class    = "db.t3.micro"
#   engine            = "postgres"

#   lifecycle {
#     precondition {
#       condition     = var.storage_gb >= 100
#       error_message = "Production DB must have at least 100 GB storage."
#     }
#   }
# }

#---------------postcondition---------------
# resource "aws_instance" "web" {
#   ami           = "ami-abc"
#   instance_type = "t3.micro"

#   lifecycle {
#     postcondition {
#       condition     = self.instance_state == "running"
#       error_message = "EC2 instance is not running after creation."
#     }
#   }
# }
