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
