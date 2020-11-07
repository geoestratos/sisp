#Django REST Framework
from rest_framework.fields import SerializerMethodField
from rest_framework import serializers

#SISP
from mecStatus import models


class GeoColumnSerializer(serializers.ModelSerializer):
        class Meta:
                model = models.GeoColumn
                fields = '__all__'
        def create (self, validated_data):
                """
                Create and return a new `GeoColumn` instance, given the validated data.
                """
                return GeoColumn.objects.create(**validated_data)
        def update

class TRSerializer (serializers.ModelSerializer):
        class Meta:
                model = models.TRstate
                fields = '__all__'
        