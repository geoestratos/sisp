#SISP
from SISP.utils import models

#Django Rest Framework
from rest_framework import serializers


class BaseModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.BaseModel
        fields = ['created', 'modified']

class BaseMecStatusSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.BaseMecStatus
        fields = ['startMd', 'startTvd', 'endMd', 'endTvd', 'programType']