variable "region" {
  type    = string
  default = "us-east-1"
}

variable "bucket_name" {
  type        = string
  default     = "cldbuck46"
  description = "Unique S3 bucket name to host static site"
}

variable "build_path" {
  type    = string
  default = "../my-app/dist"   # relative to infra/ directory
}

variable "mime_types" {
  type = map(string)
  default = {
    html  = "text/html"
    css   = "text/css"
    js    = "application/javascript"
    mjs   = "application/javascript"
    json  = "application/json"
    png   = "image/png"
    jpg   = "image/jpeg"
    jpeg  = "image/jpeg"
    svg   = "image/svg+xml"
    ico   = "image/x-icon"
    map   = "application/json"
    txt   = "text/plain"
    woff  = "font/woff"
    woff2 = "font/woff2"
    ttf   = "font/ttf"
  }
}
