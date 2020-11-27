#Django REST Framework
from rest_framework import serializers

#SISP
from trajectory import models



class DepthDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DepthData
        fields = '__all__'

class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Summary
        fields = ['__all__']
