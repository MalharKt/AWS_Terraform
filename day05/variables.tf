# STRING
variable "region" {
  type    = string
  default = "us-east-1"
}

# NUMBER
variable "root_volume_size" {
  type    = number
  default = 10
}

# BOOL
variable "enable_public_ip" {
  type    = bool
  default = true
}

# LIST
variable "allowed_ssh_cidrs" {
  type    = list(string)
  default = ["0.0.0.0/0", "192.168.0.0/16", "172.16.0.0/12"]
}

# SET
variable "instance_security_groups" {
  type    = set(string)
  default = []
}

# MAP
variable "common_tags" {
  type = map(string)
  default = {
    Environment = "dev"
    Owner       = "terraform"
  }
}

# OBJECT
variable "instance_config" {
  type = object({
    name          = string
    instance_type = string
    key_name      = string
  })

  default = {
    name          = "datatype-ec2"
    instance_type = "t2.micro"
    key_name      = "my-keypair"
  }
}

# TUPLE
variable "ingress_ports" {
  type = tuple([number, number])
  default = [22, 80]
}
