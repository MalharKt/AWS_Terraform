output "instance_public_ip" {
  value = aws_instance.ec2.public_ip
}

output "instance_tags" {
  value = aws_instance.ec2.tags
}
