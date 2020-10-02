#Django REST Framework
from mecStatus.models import MecStatus
from rest_framework import serializers

#SISP
from mecStatus import models
from SISP.serializers import BaseMecStatusSerializer , BaseModelSerializer
      

class GeoColumnSerializer(serializers.ModelSerializer):
        class Meta:
                model = models.GeoColumn
                fields = '__all__'

class TRSerializer (serializers.ModelSerializer):
        class Meta:
                model = models.TRstate
                fields = '__all__'
        

class MecStatusSerializer(serializers.ModelSerializer):
        geoColumns = GeoColumnSerializer(many=True)
        trStates = TRSerializer(many=True)
        
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