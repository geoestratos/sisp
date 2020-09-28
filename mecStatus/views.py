#Django
from django.http import request
from django.shortcuts import render
from django.http import HttpResponse

#RestFramework
from rest_framework.decorators import api_view
from rest_framework.response import Response

#SISP Utilities
from .models import MecStatus, GeoColumn, TRstate
from .serializers import  CreateGeoColumnSerializer, GeoColumnSerializer, TRStateSerializer

@api_view(['GET'])
def list_geocolumn(request):
    '''List a mechanic status values'''
    geocolumns = GeoColumn.objects.all()
    serializer = GeoColumnSerializer(geocolumns, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_geocolumn(request):
    '''List a mechanic status values'''
    serializer = CreateGeoColumnSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    geocolumn = serializer.save()

    return Response(GeoColumnSerializer(geocolumn).data)

    