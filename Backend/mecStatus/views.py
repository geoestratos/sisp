#RestFramework
from re import search
from rest_framework import viewsets, filters
from rest_framework.parsers import JSONParser

from django_filters.rest_framework import DjangoFilterBackend
#SISP Utilities
from .models import MecStatus, GeoColumn, TRstate
from mecStatus.serializers import   GeoColumnSerializer, TRSerializer, MecStatusSerializer

class MecStatusViewset(viewsets.ModelViewSet):
    parser_classes = [JSONParser]
    queryset = MecStatus.objects.all().order_by('-modified')[:1]
    serializer_class = MecStatusSerializer


class GeoColumnViewset(viewsets.ModelViewSet):
    queryset = GeoColumn.objects.all().order_by('-mecStatus_id')[:20]
    serializer_class = GeoColumnSerializer

    #Filters
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields= '__all__'
    filter_fields=('mecStatus', 'programType')

class TRstateViewset(viewsets.ModelViewSet):
    parser_classes = [JSONParser]
    queryset = TRstate.objects.all().order_by('-created')
    serializer_class = TRSerializer