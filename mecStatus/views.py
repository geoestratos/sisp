#Django
from django.http import request
from django.shortcuts import render
from django.http import HttpResponse

#RestFramework
from rest_framework import viewsets
from rest_framework import permissions

#SISP Utilities
from .models import MecStatus, GeoColumn, TRstate
from mecStatus.serializers import   GeoColumnSerializer, TRSerializer

class GeoColumnViewset(viewsets.ModelViewSet):
    queryset = GeoColumn.objects.all().order_by('-created')
    serializer_class = GeoColumnSerializer
    permission_classes = [permissions.IsAuthenticated]

class TRViewset(viewsets.ModelViewSet):
    queryset = TRstate.objects.all().order_by('-created')
    serializer_class = TRSerializer
    permission_classes = [permissions.IsAuthenticated]
    