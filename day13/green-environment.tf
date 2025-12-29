# Application Version 2.0 (Green Environment - Staging)
resource "aws_s3_object" "app_v2" {
  bucket = aws_s3_bucket.app_versions.id
  key    = "app-v2.zip"
  source = "${path.module}/app-v2/app-v2.zip"
  etag   = filemd5("${path.module}/app-v2/app-v2.zip")

  tags = var.tags
}

resource "aws_elastic_beanstalk_application_version" "v2" {
  name        = "${var.app_name}-v2"
  application = aws_elastic_beanstalk_application.app.name
  description = "Application Version 2.0 - New Feature Release"
  bucket      = aws_s3_bucket.app_versions.id
  key         = aws_s3_object.app_v2.id

  tags = var.tags
}

# ----------------------------------------
# GREEN ENVIRONMENT (STAGING)
# ----------------------------------------

resource "aws_elastic_beanstalk_environment" "green" {
  name                = "${var.app_name}-green"
  application         = aws_elastic_beanstalk_application.app.name
  solution_stack_name = var.solution_stack_name
  tier                = "WebServer"
  version_label       = aws_elastic_beanstalk_application_version.v2.name

  ##################################
  # VPC CONFIGURATION (REQUIRED)
  ##################################

  setting {
    namespace = "aws:ec2:vpc"
    name      = "VPCId"
    value     = var.vpc_id
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = join(",", var.public_subnet_ids)
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBSubnets"
    value     = join(",", var.public_subnet_ids)
  }

  ##################################
  # LOAD BALANCER CONFIG
  ##################################

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "LoadBalanced"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }

  ##################################
  # INSTANCE SETTINGS
  ##################################

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "InstanceType"
    value     = var.instance_type
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = aws_iam_instance_profile.eb_ec2_profile.name
  }

  ##################################
  # AUTO SCALING
  ##################################

  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MinSize"
    value     = "1"
  }

  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MaxSize"
    value     = "2"
  }

  ##################################
  # HEALTH & PROCESS SETTINGS
  ##################################

  setting {
    namespace = "aws:elasticbeanstalk:healthreporting:system"
    name      = "SystemType"
    value     = "enhanced"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "Port"
    value     = "8080"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "Protocol"
    value     = "HTTP"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckPath"
    value     = "/"
  }

  ##################################
  # APPLICATION ENV VARIABLES
  ##################################

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "ENVIRONMENT"
    value     = "green"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "VERSION"
    value     = "2.0"
  }

  ##################################
  # DEPLOYMENT STRATEGY
  ##################################

  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "DeploymentPolicy"
    value     = "Rolling"
  }

  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "BatchSizeType"
    value     = "Percentage"
  }

  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "BatchSize"
    value     = "50"
  }

  ##################################
  # TAGS
  ##################################

  tags = merge(
    var.tags,
    {
      Environment = "green"
      Role        = "staging"
    }
  )
}

