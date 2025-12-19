#Conditional Expressions
# resource "aws_instance" "app_server" {
#   ami           = "ami-0f5ee92e2d63afc18" # Amazon Linux 2 (example)
#   instance_type = var.environment == "prod" ? "t3.medium" : "t2.micro"

#   tags = {
#     Name = "app-${var.environment}"
#   }
# }

#Dynamic Blocks
# resource "aws_security_group" "dynamic_sg" {
#   name        = "dynamic-sg-${var.environment}"
#   description = "Security group with dynamic rules"
#   dynamic "ingress" {
#     for_each = var.ingress_rules
#     content {
#       from_port   = ingress.value.from_port
#       to_port     = ingress.value.to_port
#       protocol    = ingress.value.protocol
#       cidr_blocks = ingress.value.cidr_blocks
#       description = ingress.value.description
#     }
#   }
  
#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
  
#   tags = {
#     Name = "dynamic-sg-${var.environment}"
#   }
# }

#Splat expressions
# resource "aws_instance" "web" {
#   count         = 3
#   ami           = "ami-068c0051b15cdb816"
#   instance_type = "t2.micro"

#   tags = {
#     Name = "web-${count.index}"
#   }
# }
