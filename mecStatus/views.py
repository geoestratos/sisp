#RestFramework
from rest_framework import viewsets
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
    queryset = GeoColumn.objects.all().order_by('-created')
    serializer_class = GeoColumnSerializer

class TRstateViewset(viewsets.ModelViewSet):
    parser_classes = [JSONParser]
    queryset = TRstate.objects.all().order_by('-created')
    serializer_class = TRSerializer