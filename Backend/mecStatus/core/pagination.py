from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class DataOnly(PageNumberPagination):

    def get_paginated_response(self, data):
        return Response(data)