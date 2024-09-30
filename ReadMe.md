On Local Machine:
1. python3 -m http.server 8000
    localhost
2. Create virtual env:
    python3 -m venv myportfolioenv
    source myportfolioenv/bin/activate
3. Install Django:
    pip install django
4. Create a new Django Project:
    django-admin startproject myportfolio
    cd myportfolio
5. Run dev server
    python manage.py runserver
6. access on:
    http://localhost:8000
7. create an app inside project:
    python manage.py startapp portfolio
8. Edit settings.py:
    INSTALLED_APPS = [
    # Other apps...
    'portfolio',
    ]
9. Add views and templates to your portfolio app:
    In portfolio/views.py:
        from django.shortcuts import render

        def home(request):
            return render(request, 'home.html')
        def about(request):
            return render(request, 'about.html')
        def contact(request):
            return render(request, 'contact.html')

10. Create Templates
        We'll create HTML files for each section based on the structure in the portfolio example. Here’s a simple mockup of the design.
        home.html:
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Portfolio</title>
                <link rel="stylesheet" href="{% static 'portfolio/style.css' %}">
            </head>
            <body>
                <header>
                    <h1>Hi, I'm Ansaf Nagori</h1>
                    <h2>Cloud Architect & DevOps Engineer</h2>
                </header>
                <section id="work">
                    <h3>Work</h3>
                    <div class="work-item">
                        <h4>Genpact</h4>
                        <p>DevOps Engineer</p>
                    </div>
                    <div class="work-item">
                        <h4>DXC Technology</h4>
                        <p>Software Engineer</p>
                    </div>
                    <!-- Add more work experiences as needed -->
                </section>
                <footer>
                    <a href="{% url 'about' %}">About</a>
                    <a href="{% url 'contact' %}">Contact</a>
                </footer>
            </body>
            </html>

        about.html (About section):
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Me</title>
                <link rel="stylesheet" href="{% static 'portfolio/style.css' %}">
            </head>
            <body>
                <header>
                    <h1>About Me</h1>
                </header>
                <section id="about">
                    <p>I'm a passionate cloud architect with experience in DevOps, automation, and CI/CD.</p>
                    <p>Skilled in AWS, GCP, and Kubernetes.</p>
                    <p>Currently pursuing a Master's in Computer Science at IIT Chicago.</p>
                </section>
                <footer>
                    <a href="{% url 'home' %}">Work</a>
                    <a href="{% url 'contact' %}">Contact</a>
                </footer>
            </body>
            </html>

        contact.html:
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact Me</title>
                <link rel="stylesheet" href="{% static 'portfolio/style.css' %}">
            </head>
            <body>
                <header>
                    <h1>Contact Me</h1>
                </header>
                <section id="contact">
                    <p>Email: ansaf56@gmail.com</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/nagoriansaf/">LinkedIn Profile</a></p>
                    <p>GitHub: <a href="https://github.com/kenichi-07">GitHub Profile</a></p>
                </section>
                <footer>
                    <a href="{% url 'home' %}">Work</a>
                    <a href="{% url 'about' %}">About</a>
                </footer>
            </body>
            </html>


11. Configure URLs:
    In myportfolio/urls.py:
    from django.urls import path
    from portfolio import views

    urlpatterns = [
        path('', views.home, name='home'),
        path('about/', views.about, name='about'),
        path('contact/', views.contact, name='contact'),
    ]
        
12. Static Files (CSS)
    You can create a style.css file in portfolio/static/portfolio/style.css to style your portfolio based on the example design. For simplicity, here’s a basic setup:
/* General settings for desktop-first design */
body {
    font-family: Arial, sans-serif;
    background-image: url("{% static 'portfolio/bg1.png' %}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    margin: 0;
    padding: 0;
    font-size: 18px; /* Larger base font size for desktop */
}

/* Header - large, center-aligned for desktop */
header {
    text-align: center;
    padding: 300px 0; /* Larger padding for desktop */
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 2rem; /* Large font size for desktop header */
}

h1 {
    font-size: 4.5rem; /* Large heading for desktop */
}

h2 {
    font-size: 2.5rem; /* Secondary heading larger for desktop */
}

/* Section content optimized for wide screens */
section {
    width: 70%; /* Constrain content width to 70% of the screen */
    margin: 50px auto; /* Center content on desktop */
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px; /* Rounded corners */
}

/* Individual work items displayed with better spacing for desktop */
.work-item {
    margin: 30px 0;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2); /* Slight background color for work items */
    border-radius: 10px;
    text-align: left;
}

/* Footer optimized for desktop */
footer {
    text-align: center;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.9);
    font-size: 1.2rem;
}

/* Media query for smaller screens (e.g., tablets or phones) */
@media screen and (max-width: 1024px) {
    header {
        padding: 150px 0;
        font-size: 1.5rem;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    section {
        width: 90%;
        padding: 20px;
    }

    .work-item {
        padding: 15px;
    }

    footer {
        padding: 30px;
        font-size: 1rem;
    }
}

Terraform deployment:
    MacBook-Pro:~ ansafnagori$ gcloud auth login
Your browser has been opened to visit:

    https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=32555940559.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8085%2F&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fappengine.admin+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsqlservice.login+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcompute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Faccounts.reauth&state=Da7cpxXz0N8nklKjxi17mzI2o0lLhw&access_type=offline&code_challenge=k3NSjmHVAbhi7JLSB4uElrR2RXu9QYU3AV2-L_kYwls&code_challenge_method=S256


You are now logged in as [anagori@hawk.iit.edu].
Your current project is [cloud-resume-api-435404].  You can change this setting by running:
  $ gcloud config set project PROJECT_ID
MacBook-Pro:~ ansafnagori$ gcloud config set project cloud-resume-api-435404
Updated property [core/project].
MacBook-Pro:~ ansafnagori$ gcloud iam service-accounts create terraform --display-name "Terraform admin account"
Created service account [terraform].
MacBook-Pro:~ ansafnagori$ gcloud projects add-iam-policy-binding cloud-resume-api-435404 --member="serviceAccount:terraform@cloud-resume-api-435404.iam.gserviceaccount.com" --role="roles/owner"
Updated IAM policy for project [cloud-resume-api-435404].
bindings:
- members:
  - serviceAccount:service-460946356072@compute-system.iam.gserviceaccount.com
  role: roles/compute.serviceAgent
- members:
  - serviceAccount:service-460946356072@container-engine-robot.iam.gserviceaccount.com
  role: roles/container.serviceAgent
- members:
  - serviceAccount:service-460946356072@containerregistry.iam.gserviceaccount.com
  role: roles/containerregistry.ServiceAgent
- members:
  - serviceAccount:460946356072-compute@developer.gserviceaccount.com
  - serviceAccount:460946356072@cloudservices.gserviceaccount.com
  role: roles/editor
- members:
  - serviceAccount:service-460946356072@cloud-filer.iam.gserviceaccount.com
  role: roles/file.serviceAgent
- members:
  - serviceAccount:service-460946356072@firebase-rules.iam.gserviceaccount.com
  role: roles/firebaserules.system
- members:
  - serviceAccount:service-460946356072@gcp-sa-networkmanagement.iam.gserviceaccount.com
  role: roles/networkmanagement.serviceAgent
- members:
  - serviceAccount:terraform@cloud-resume-api-435404.iam.gserviceaccount.com
  - user:anagori@hawk.iit.edu
  role: roles/owner
- members:
  - serviceAccount:service-460946356072@gcp-sa-pubsub.iam.gserviceaccount.com
  role: roles/pubsub.serviceAgent
etag: BwYjT-whkNw=
version: 1
MacBook-Pro:~ ansafnagori$ gcloud iam service-accounts keys create ~/terraform-key.json --iam-account=terraform@cloud-resume-api-435404.iam.gserviceaccount.com
created key [a63e969e6b7034ef1bedb8ab3a7404878e0d4f28] of type [json] as [/Users/ansafnagori/terraform-key.json] for [terraform@cloud-resume-api-435404.iam.gserviceaccount.com]
MacBook-Pro:~ ansafnagori$ export GOOGLE_APPLICATION_CREDENTIALS=~/terraform-key.json
MacBook-Pro:~ ansafnagori$ cd ~/Documents/Projects/
MacBook-Pro:Projects ansafnagori$ ls
blogging_platform
devops-pipeline
django-to-do
django_projects
flask_webapp
gcp_simple_webapp
gcp_vpn
generic-infra-code
microservices-using-kubernetes
resume-matchmaker
terraform-ansible-kubernetes-jenkins-docker-aws
MacBook-Pro:Projects ansafnagori$ cd ..
MacBook-Pro:Documents ansafnagori$ ls
ACS					assign1_report1_examplde.pdf
College					car_price_prediction
Documents - Ansaf’s MacBook Pro		fw4_signed.pdf
Educational_certificates		gcp_portfolio
Educational_certificates.zip		git-filter-repo
Flask_WebApp				google-cloud-cli-darwin-arm.tar
Loan Docs				google-cloud-sdk
Portfolio				my_projects
Projects				my_projects_git
Q9SPM.xlsx				portfolio-terraform-aws
SPM					product.csv
SPM.zip					resume-matchmaker-app
Security-ML
MacBook-Pro:Documents ansafnagori$ cd Portfolio/
MacBook-Pro:Portfolio ansafnagori$ ls
ReadMe.md	myportfolio	portfolio.py
main.tf		myportfolioenv	variables.tf
MacBook-Pro:Portfolio ansafnagori$ terraform init
Initializing the backend...
Initializing provider plugins...
- Reusing previous version of hashicorp/google from the dependency lock file
- Installing hashicorp/google v6.4.0...
- Installed hashicorp/google v6.4.0 (signed by HashiCorp)

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
MacBook-Pro:Portfolio ansafnagori$ terraform plan

Terraform used the selected providers to generate the following execution plan.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # google_compute_firewall.default-allow-ssh will be created
  + resource "google_compute_firewall" "default-allow-ssh" {
      + creation_timestamp = (known after apply)
      + destination_ranges = (known after apply)
      + direction          = (known after apply)
      + enable_logging     = (known after apply)
      + id                 = (known after apply)
      + name               = "allow-ssh"
      + network            = "portfolio-network"
      + priority           = 1000
      + project            = "cloud-resume-api-435404"
      + self_link          = (known after apply)
      + source_ranges      = [
          + "0.0.0.0/0",
        ]

      + allow {
          + ports    = [
              + "22",
              + "80",
              + "443",
            ]
          + protocol = "tcp"
        }
    }

  # google_compute_instance.portfolio-instance will be created
  + resource "google_compute_instance" "portfolio-instance" {
      + can_ip_forward       = false
      + cpu_platform         = (known after apply)
      + current_status       = (known after apply)
      + deletion_protection  = false
      + effective_labels     = {
          + "goog-terraform-provisioned" = "true"
        }
      + id                   = (known after apply)
      + instance_id          = (known after apply)
      + label_fingerprint    = (known after apply)
      + machine_type         = "e2-micro"
      + metadata             = {
          + "ssh-keys" = "your-debian:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvAhGKe8NL7zfNS2av7Kuap/On79xvQHn1eCtRCBo2Sccjzcq1DxwS9iADo+FZIVVok0PgNwGBBNwcmkR8SkIDQg/JVs81WlC0iN9dAKVvSjMwvBYdYSTbAqU5ot9vBX/2ek85JzdVnARAdjI1vKy/jT3ePlXT3kfPeDoHUJrNP7hr6NCYV7kqhw7lvEgIkx5/9Kg6LeXO/PW2q93GBjMlx1x0zv4TS9w2K3HLsAJg5BcgRZSXYKt6jprfXgB7y5dtXSBZF1XG/O7qeLCySkpvtjkXbLDVoBDcC1qhcXO61bT7C2LWDW9l75Pnu7ttcyuBjRGByCW4Qk7HZfcnM7xZ ansafnagori@MacBook-Pro.local"
        }
      + metadata_fingerprint = (known after apply)
      + min_cpu_platform     = (known after apply)
      + name                 = "portfolio-instance"
      + project              = "cloud-resume-api-435404"
      + self_link            = (known after apply)
      + tags                 = [
          + "http-server",
          + "https-server",
        ]
      + tags_fingerprint     = (known after apply)
      + terraform_labels     = {
          + "goog-terraform-provisioned" = "true"
        }
      + zone                 = "us-central1-a"

      + boot_disk {
          + auto_delete                = true
          + device_name                = (known after apply)
          + disk_encryption_key_sha256 = (known after apply)
          + kms_key_self_link          = (known after apply)
          + mode                       = "READ_WRITE"
          + source                     = (known after apply)

          + initialize_params {
              + image                  = "debian-cloud/debian-10"
              + labels                 = (known after apply)
              + provisioned_iops       = (known after apply)
              + provisioned_throughput = (known after apply)
              + size                   = (known after apply)
              + type                   = (known after apply)
            }
        }

      + confidential_instance_config (known after apply)

      + guest_accelerator (known after apply)

      + network_interface {
          + internal_ipv6_prefix_length = (known after apply)
          + ipv6_access_type            = (known after apply)
          + ipv6_address                = (known after apply)
          + name                        = (known after apply)
          + network                     = "portfolio-network"
          + network_ip                  = (known after apply)
          + stack_type                  = (known after apply)
          + subnetwork                  = (known after apply)
          + subnetwork_project          = (known after apply)

          + access_config {
              + nat_ip       = (known after apply)
              + network_tier = (known after apply)
            }
        }

      + reservation_affinity (known after apply)

      + scheduling (known after apply)
    }

  # google_compute_network.vpc_network will be created
  + resource "google_compute_network" "vpc_network" {
      + auto_create_subnetworks                   = true
      + delete_default_routes_on_create           = false
      + gateway_ipv4                              = (known after apply)
      + id                                        = (known after apply)
      + internal_ipv6_range                       = (known after apply)
      + mtu                                       = (known after apply)
      + name                                      = "portfolio-network"
      + network_firewall_policy_enforcement_order = "AFTER_CLASSIC_FIREWALL"
      + numeric_id                                = (known after apply)
      + project                                   = "cloud-resume-api-435404"
      + routing_mode                              = (known after apply)
      + self_link                                 = (known after apply)
    }

Plan: 3 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + instance_ip = (known after apply)

───────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't
guarantee to take exactly these actions if you run "terraform apply" now.
MacBook-Pro:Portfolio ansafnagori$ terraform apply

Terraform used the selected providers to generate the following execution plan.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # google_compute_firewall.default-allow-ssh will be created
  + resource "google_compute_firewall" "default-allow-ssh" {
      + creation_timestamp = (known after apply)
      + destination_ranges = (known after apply)
      + direction          = (known after apply)
      + enable_logging     = (known after apply)
      + id                 = (known after apply)
      + name               = "allow-ssh"
      + network            = "portfolio-network"
      + priority           = 1000
      + project            = "cloud-resume-api-435404"
      + self_link          = (known after apply)
      + source_ranges      = [
          + "0.0.0.0/0",
        ]

      + allow {
          + ports    = [
              + "22",
              + "80",
              + "443",
            ]
          + protocol = "tcp"
        }
    }

  # google_compute_instance.portfolio-instance will be created
  + resource "google_compute_instance" "portfolio-instance" {
      + can_ip_forward       = false
      + cpu_platform         = (known after apply)
      + current_status       = (known after apply)
      + deletion_protection  = false
      + effective_labels     = {
          + "goog-terraform-provisioned" = "true"
        }
      + id                   = (known after apply)
      + instance_id          = (known after apply)
      + label_fingerprint    = (known after apply)
      + machine_type         = "e2-micro"
      + metadata             = {
          + "ssh-keys" = "your-debian:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvAhGKe8NL7zfNS2av7Kuap/On79xvQHn1eCtRCBo2Sccjzcq1DxwS9iADo+FZIVVok0PgNwGBBNwcmkR8SkIDQg/JVs81WlC0iN9dAKVvSjMwvBYdYSTbAqU5ot9vBX/2ek85JzdVnARAdjI1vKy/jT3ePlXT3kfPeDoHUJrNP7hr6NCYV7kqhw7lvEgIkx5/9Kg6LeXO/PW2q93GBjMlx1x0zv4TS9w2K3HLsAJg5BcgRZSXYKt6jprfXgB7y5dtXSBZF1XG/O7qeLCySkpvtjkXbLDVoBDcC1qhcXO61bT7C2LWDW9l75Pnu7ttcyuBjRGByCW4Qk7HZfcnM7xZ ansafnagori@MacBook-Pro.local"
        }
      + metadata_fingerprint = (known after apply)
      + min_cpu_platform     = (known after apply)
      + name                 = "portfolio-instance"
      + project              = "cloud-resume-api-435404"
      + self_link            = (known after apply)
      + tags                 = [
          + "http-server",
          + "https-server",
        ]
      + tags_fingerprint     = (known after apply)
      + terraform_labels     = {
          + "goog-terraform-provisioned" = "true"
        }
      + zone                 = "us-central1-a"

      + boot_disk {
          + auto_delete                = true
          + device_name                = (known after apply)
          + disk_encryption_key_sha256 = (known after apply)
          + kms_key_self_link          = (known after apply)
          + mode                       = "READ_WRITE"
          + source                     = (known after apply)

          + initialize_params {
              + image                  = "debian-cloud/debian-10"
              + labels                 = (known after apply)
              + provisioned_iops       = (known after apply)
              + provisioned_throughput = (known after apply)
              + size                   = (known after apply)
              + type                   = (known after apply)
            }
        }

      + confidential_instance_config (known after apply)

      + guest_accelerator (known after apply)

      + network_interface {
          + internal_ipv6_prefix_length = (known after apply)
          + ipv6_access_type            = (known after apply)
          + ipv6_address                = (known after apply)
          + name                        = (known after apply)
          + network                     = "portfolio-network"
          + network_ip                  = (known after apply)
          + stack_type                  = (known after apply)
          + subnetwork                  = (known after apply)
          + subnetwork_project          = (known after apply)

          + access_config {
              + nat_ip       = (known after apply)
              + network_tier = (known after apply)
            }
        }

      + reservation_affinity (known after apply)

      + scheduling (known after apply)
    }

  # google_compute_network.vpc_network will be created
  + resource "google_compute_network" "vpc_network" {
      + auto_create_subnetworks                   = true
      + delete_default_routes_on_create           = false
      + gateway_ipv4                              = (known after apply)
      + id                                        = (known after apply)
      + internal_ipv6_range                       = (known after apply)
      + mtu                                       = (known after apply)
      + name                                      = "portfolio-network"
      + network_firewall_policy_enforcement_order = "AFTER_CLASSIC_FIREWALL"
      + numeric_id                                = (known after apply)
      + project                                   = "cloud-resume-api-435404"
      + routing_mode                              = (known after apply)
      + self_link                                 = (known after apply)
    }

Plan: 3 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + instance_ip = (known after apply)

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

google_compute_network.vpc_network: Creating...
google_compute_network.vpc_network: Still creating... [10s elapsed]
google_compute_network.vpc_network: Still creating... [20s elapsed]
google_compute_network.vpc_network: Still creating... [30s elapsed]

MacBook-Pro:Portfolio ansafnagori$ terraform apply
google_compute_network.vpc_network: Refreshing state... [id=projects/cloud-resume-api-435404/global/networks/portfolio-network]
google_compute_firewall.default-allow-ssh: Refreshing state... [id=projects/cloud-resume-api-435404/global/firewalls/portfolio-allow-ssh]

Terraform used the selected providers to generate the following execution plan.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # google_compute_instance.portfolio-instance will be created
  + resource "google_compute_instance" "portfolio-instance" {
      + can_ip_forward       = false
      + cpu_platform         = (known after apply)
      + current_status       = (known after apply)
      + deletion_protection  = false
      + effective_labels     = {
          + "goog-terraform-provisioned" = "true"
        }
      + id                   = (known after apply)
      + instance_id          = (known after apply)
      + label_fingerprint    = (known after apply)
      + machine_type         = "e2-micro"
      + metadata             = {
          + "ssh-keys" = "your-debian:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvAhGKe8NL7zfNS2av7Kuap/On79xvQHn1eCtRCBo2Sccjzcq1DxwS9iADo+FZIVVok0PgNwGBBNwcmkR8SkIDQg/JVs81WlC0iN9dAKVvSjMwvBYdYSTbAqU5ot9vBX/2ek85JzdVnARAdjI1vKy/jT3ePlXT3kfPeDoHUJrNP7hr6NCYV7kqhw7lvEgIkx5/9Kg6LeXO/PW2q93GBjMlx1x0zv4TS9w2K3HLsAJg5BcgRZSXYKt6jprfXgB7y5dtXSBZF1XG/O7qeLCySkpvtjkXbLDVoBDcC1qhcXO61bT7C2LWDW9l75Pnu7ttcyuBjRGByCW4Qk7HZfcnM7xZ ansafnagori@MacBook-Pro.local"
        }
      + metadata_fingerprint = (known after apply)
      + min_cpu_platform     = (known after apply)
      + name                 = "portfolio-instance"
      + project              = "cloud-resume-api-435404"
      + self_link            = (known after apply)
      + tags                 = [
          + "http-server",
          + "https-server",
        ]
      + tags_fingerprint     = (known after apply)
      + terraform_labels     = {
          + "goog-terraform-provisioned" = "true"
        }
      + zone                 = "us-central1-a"

      + boot_disk {
          + auto_delete                = true
          + device_name                = (known after apply)
          + disk_encryption_key_sha256 = (known after apply)
          + kms_key_self_link          = (known after apply)
          + mode                       = "READ_WRITE"
          + source                     = (known after apply)

          + initialize_params {
              + image                  = "debian-cloud/debian-11"
              + labels                 = (known after apply)
              + provisioned_iops       = (known after apply)
              + provisioned_throughput = (known after apply)
              + size                   = (known after apply)
              + type                   = (known after apply)
            }
        }

      + confidential_instance_config (known after apply)

      + guest_accelerator (known after apply)

      + network_interface {
          + internal_ipv6_prefix_length = (known after apply)
          + ipv6_access_type            = (known after apply)
          + ipv6_address                = (known after apply)
          + name                        = (known after apply)
          + network                     = "portfolio-network"
          + network_ip                  = (known after apply)
          + stack_type                  = (known after apply)
          + subnetwork                  = (known after apply)
          + subnetwork_project          = (known after apply)

          + access_config {
              + nat_ip       = (known after apply)
              + network_tier = (known after apply)
            }
        }

      + reservation_affinity (known after apply)

      + scheduling (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + instance_ip = (known after apply)

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

google_compute_instance.portfolio-instance: Creating...
google_compute_instance.portfolio-instance: Still creating... [10s elapsed]
google_compute_instance.portfolio-instance: Creation complete after 12s [id=projects/cloud-resume-api-435404/zones/us-central1-a/instances/portfolio-instance]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

instance_ip = "35.192.206.1"
MacBook-Pro:Portfolio ansafnagori$ 

Host Django Application on the server:

gcloud compute ssh portfolio-instance --zone=us-central1-a


sudo apt update
sudo apt install python3-pip python3-dev libpq-dev nginx curl

mkdir ~/my-django-app
cd ~/my-django-app
python3 -m venv venv
source venv/bin/activate

The key fingerprint is:
SHA256:mMpodidL2YBp6Z9kSBGmekhFb2nADbKvwVjsZqLVzms anagori@hawk.iit.edu
The key's randomart image is:
+---[RSA 4096]----+
| .==o            |
| ++oo..          |
|.o+  =           |
|=+.*o  o         |
|=o%.o o S        |
|.Xo* =           |
|..* % o          |
| o *E*           |
|   .=            |
+----[SHA256]-----+
(venv) ansafnagori@portfolio-instance:~/my-django-app$ ls
venv
(venv) ansafnagori@portfolio-instance:~/my-django-app$ ssh-keygen -t rsa -b 4096 -C "anagori@hawk.iit.edu"
