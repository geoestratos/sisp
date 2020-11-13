#RestFramework
from rest_framework import viewsets, filters
from rest_framework import views
from rest_framework.parsers import JSONParser
from django_filters.rest_framework import DjangoFilterBackend

#SISP Utilities
from trajectory.models import DepthData, Summary
from trajectory.serializers import DepthDataSerializer, SummarySerializer

class DepthDataViewSet(viewsets.ModelViewSet):
    queryset = DepthData.objects.all().order_by('-created')
    serializer_class = DepthDataSerializer
    
class SummaryViewSet(viewsets.ModelViewSet):
    queryset = Summary.objects.all().order_by('-created')[:1]
    serializer_class = SummarySerializer