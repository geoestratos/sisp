#Django
from django.db import models

#SISP utilities
from SISP.utils.models import BaseModel


'''This is the main model, the cluster contain every models'''
class Cluster(BaseModel, models.Model):    
    name = models.CharField('nombre', max_length=30)
    contract = models.CharField('contrato', max_length=40)
    
    def __str__(self):
        return self.name

''' The different physical equipments make up a cluster'''
class Equipment(BaseModel, models.Model):  
    name = models.CharField('nombre', max_length=30)
    cluster = models.ForeignKey(Cluster, on_delete=models.CASCADE, related_name='equipment', verbose_name='cluster')

    def __str__(self):
        return self.name

''' Each equipments can contain very wells'''
class Well(BaseModel, models.Model):
    name = models.CharField('nombre', max_length=40)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, related_name='well', verbose_name='equipo')
    
    def __str__(self):
        return self.name
