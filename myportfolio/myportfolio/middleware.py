# myapp/middleware.py

import logging
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger('django')

class LogIPMiddleware(MiddlewareMixin):
    def process_request(self, request):
        ip = request.META.get('REMOTE_ADDR')
        logger.info(f'IP address: {ip}')