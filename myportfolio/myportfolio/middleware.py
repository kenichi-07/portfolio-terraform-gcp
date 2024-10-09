# myapp/middleware.py

import logging

logger = logging.getLogger(__name__)

class LogIPMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Get the IP address
        ip_address = self.get_client_ip(request)
        
        # Log the IP address
        logger.info(f"Visitor IP: {ip_address}")

        # Continue processing the request
        response = self.get_response(request)
        return response

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
