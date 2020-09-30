#Django REST Framework
from mecStatus.models import MecStatus
from rest_framework import serializers

from mecStatus import models

      

class GeoColumnSerializer(serializers.HyperlinkedModelSerializer):

        class Meta:
                model = models.GeoColumn
                fields = ['layer', 'startMd', 'startTvd', 'endMd', 'endTvd', 'programType']

class TRSerializer (serializers.HyperlinkedModelSerializer):
        class Meta:
                model = models.TRstate
                fields = ['pipeDiameter', 'drillDiameter', 'startMd', 'startTvd', 'endMd', 'endTvd', 'programType']

class MecStatusSerializer(serializers.HyperlinkedModelSerializer):
        geoColumns = GeoColumnSerializer()
        trStates = TRSerializer()
        
        class Meta:
                model = models.MecStatus
                fields = ['name', 'geoColumns', 'trStates']
        
        def create (self, validated_data):
                mecStatus = models.MecStatus(name=validated_data.get("name"))
                mecStatus.save()

                geoColumns = validated_data.get('geoColumns')
                for geoColumn in  geoColumns:
                        models.GeoColumn.objects.create(mecStatus=mecStatus, **geoColumn)

                trStates = validated_data.get('trStates')
                for trState in  trStates:
                        models.TRstate.objects.create(mecStatus=mecStatus, **trState)

                return validated_data