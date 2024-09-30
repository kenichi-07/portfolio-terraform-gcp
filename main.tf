provider "google" {
  project = "cloud-resume-api-435404"
  region  = "us-central1"
  zone    = "us-central1-a"
}

# Network
resource "google_compute_network" "vpc_network" {
  name = "portfolio-network"
}

# Firewall
resource "google_compute_firewall" "default-allow-ssh" {
  name    = "allow-ssh"
  network = google_compute_network.vpc_network.name

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "443"]
  }

  source_ranges = ["0.0.0.0/0"]
}

# Create the instance
resource "google_compute_instance" "portfolio-instance" {
  name         = "portfolio-instance"
  machine_type = "e2-micro"
  zone         = "us-central1-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10"
    }
  }

  network_interface {
    network = google_compute_network.vpc_network.name
    access_config {
      # To allow SSH and HTTP access to the instance
    }
  }

  metadata = {
    ssh-keys = "your-debian:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvAhGKe8NL7zfNS2av7Kuap/On79xvQHn1eCtRCBo2Sccjzcq1DxwS9iADo+FZIVVok0PgNwGBBNwcmkR8SkIDQg/JVs81WlC0iN9dAKVvSjMwvBYdYSTbAqU5ot9vBX/2ek85JzdVnARAdjI1vKy/jT3ePlXT3kfPeDoHUJrNP7hr6NCYV7kqhw7lvEgIkx5/9Kg6LeXO/PW2q93GBjMlx1x0zv4TS9w2K3HLsAJg5BcgRZSXYKt6jprfXgB7y5dtXSBZF1XG/O7qeLCySkpvtjkXbLDVoBDcC1qhcXO61bT7C2LWDW9l75Pnu7ttcyuBjRGByCW4Qk7HZfcnM7xZ ansafnagori@MacBook-Pro.local"
  }

  tags = ["http-server", "https-server"]
}

# Output the public IP address
output "instance_ip" {
  value = google_compute_instance.portfolio-instance.network_interface[0].access_config[0].nat_ip
}
