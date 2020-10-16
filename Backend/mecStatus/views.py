#RestFramework
from rest_framework import viewsets, filters
from rest_framework.parsers import JSONParser
from django_filters.rest_framework import DjangoFilterBackend

#SISP Utilities
from .models import GeoColumn, TRstate
from mecStatus.serializers import   GeoColumnSerializer, TRSerializer

class GeoColumnViewset(viewsets.ModelViewSet):
    queryset = GeoColumn.objects.all().order_by('orderId')
    serializer_class = GeoColumnSerializer

    #Filters
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields= '__all__'
    filter_fields=('well', 'programType')

class TRstateViewset(viewsets.ModelViewSet):
    parser_classes = [JSONParser]
    queryset = TRstate.objects.all().order_by('orderId')
    serializer_class = TRSerializer

    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields= '__all__'
    filter_fields=('well', 'programType')
