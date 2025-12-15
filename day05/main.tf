# Security Group
resource "aws_security_group" "ec2_sg" {
  name = "datatype-ec2-sg"

  dynamic "ingress" {
    for_each = var.ingress_ports
    content {
      from_port   = ingress.value
      to_port     = ingress.value
      protocol    = "tcp"
      cidr_blocks = [var.allowed_ssh_cidrs[0]]
    }
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = [var.allowed_ssh_cidrs[2]]
  }

  tags = var.common_tags
}

# EC2 Instance
resource "aws_instance" "ec2" {
  ami                    = "ami-0c02fb55956c7d316" # Amazon Linux 2 (us-east-1)
  instance_type          = var.instance_config.instance_type
  key_name               = var.instance_config.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  
  associate_public_ip_address = var.enable_public_ip

  root_block_device {
    volume_size = var.root_volume_size
  }

  tags = merge(
    var.common_tags,
    {
      Name = var.instance_config.name
    }
  )
}
