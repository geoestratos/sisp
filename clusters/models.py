#Django
from django.db import models

#SISP utilities
from SISP.utils.models import BaseModel


'''This is the main model, the cluster contain every models'''
class Cluster(BaseModel, models.Model):    
    name = models.CharField(max_length=30)
    contract = models.CharField(max_length=40)

''' The different physical equipments make up a cluster'''
class Equipment(BaseModel, models.Model):  
    name = models.CharField(max_length=30)
    cluster = models.ForeignKey(Cluster, on_delete=models.CASCADE)

''' Each equipments can contain very wells'''
class Well(BaseModel, models.Model):
    name = models.CharField(max_length=40)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    