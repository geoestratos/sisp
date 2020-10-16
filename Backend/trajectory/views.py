#RestFramework
from rest_framework import viewsets, filters
from rest_framework import views
from rest_framework.parsers import JSONParser
from django_filters.rest_framework import DjangoFilterBackend

#SISP Utilities
from trajectory.models import TrajectoryData, TrajectorySummary
from trajectory.serializers import TrajectoryDataSerializer, TrajectorySummarySerializer

class TrajectoryDataViewSet(viewsets.ModelViewSet):
    queryset = TrajectoryData.objects.all().order_by('-created')
    serializer_class = TrajectoryDataSerializer
    
class TrajcetorySummaryViewSet(viewsets.ModelViewSet):
    queryset = TrajectorySummary.objects.all().order_by('-created')
    serializer_class = TrajectorySummarySerializer