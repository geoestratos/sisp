#Django REST Framework
from rest_framework import serializers

#SISP
from trajectory import models



class TrajectoryDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TrajectoryData
        fields = '__all__'

class TrajectorySummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TrajectorySummary
        fields = ['id','trajectoryType', 'dls', 'inclination', 'totalDepth', 'displacement', 'azimut']
