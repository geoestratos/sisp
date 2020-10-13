#Django REST Framework
from rest_framework.fields import SerializerMethodField
from rest_framework import serializers

#SISP
from trajectory import models

class TrajectoryDataSerializer(serializers.Serializer):
    class Meta:
        model = models.TrajectoryData
        fields = '__all__'


