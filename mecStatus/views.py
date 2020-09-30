#Django
from django.http import request
from django.shortcuts import render
from django.http import HttpResponse

#RestFramework
from rest_framework import viewsets
from rest_framework import permissions

#SISP Utilities
from .models import MecStatus, GeoColumn, TRstate
from mecStatus.serializers import   GeoColumnSerializer, TRSerializer, MecStatusSerializer

class MecStatusViewset(viewsets.ModelViewSet):
    queryset = MecStatus.objects.all().order_by('-created')
    serializer_class = MecStatusSerializer

class GeoColumnViewset(viewsets.ModelViewSet):
    queryset = GeoColumn.objects.all().order_by('-created')
    serializer_class = GeoColumnSerializer


class TRViewset(viewsets.ModelViewSet):
    queryset = TRstate.objects.all().order_by('-created')
    serializer_class = TRSerializer

    