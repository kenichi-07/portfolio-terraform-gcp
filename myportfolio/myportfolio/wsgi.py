"""
WSGI config for myportfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
import sys
from django.core.wsgi import get_wsgi_application

sys.path.append('/Users/ansafnagori/Documents/Projects/portfolio-terraform-gcp/myportfolio')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myportfolio.settings')  # This should be 'myportfolio.settings'
application = get_wsgi_application()
