#Django REST Framework
from rest_framework.fields import SerializerMethodField
from rest_framework import serializers

#SISP
from mecStatus import models
      

class GeoColumnSerializer(serializers.ModelSerializer):
        class Meta:
                model = models.GeoColumn
                fields = '__all__'

class TRSerializer (serializers.ModelSerializer):
        class Meta:
                model = models.TRstate
                fields = '__all__'
        

class MecStatusSerializer(serializers.ModelSerializer):
        geoColumns = SerializerMethodField()
        trStates = TRSerializer(many=True)
        
        class Meta:
                model = models.MecStatus
                fields = '__all__'
        
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

        def get_geoColumns(self, instance):
                geoColumns = instance.geoColumns.order_by('orderId')
                return GeoColumnSerializer(geoColumns, many=True).data