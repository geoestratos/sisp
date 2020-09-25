'''Mechanic Status module'''

#Django
from django.db import models
from django.db.models.deletion import CASCADE

#SISP utilities
from clusters.models import Well
from SISP.utils.models import BaseModel, BaseMecStatus



class MecStatus(BaseModel, models.Model):
    '''Module from the principal app.'''
    well = models.ForeignKey('Oil well', Well, on_delete=CASCADE)


class GeoColumn(BaseModel, BaseMecStatus, models.Model):
    ''' Submodule from Mechanic status, this represent the Geological column chart'''

    LAYERS_CHOICES = (
    ('T.A'),
    ('RPLCN'),
    ('PLCNS'),
    ('PLCNM'),
    ('PL'),
    ('MS'),
    ('YAC-8'),
    ('YAC-7'),
    ('YAC-6'),
    ('YAC-5'),
    ('YAC-4'),
    ('YAC-3'),
    ('YAC-2'),
    ('YAC-1'),
)
    mecStatus = models.ForeignKey('Mechanic status', MecStatus, on_delete=CASCADE)
    layer = models.CharField('Geological Layer', max_length=7, choices=LAYERS_CHOICES, default='T.A')
    

PIPE_CHOICES = (
    ('20'),
    ('13 3/8'),
    ('9 5/8'),
    ('7'),
)

DRILL_CHOICES = (
    ('26'),
    ('16'),
    ('12 1/4'),
    ('8 1/2'),

)

class TRstate(BaseModel, BaseMecStatus, models.Model):
    ''' Submodule from Mechanic status, this represent the Pipe lines chart'''
    mecStatus = models.ForeignKey('Mechanic status', MecStatus, on_delete=CASCADE)
    pipeDiameter = models.CharField(max_length=7, choices=PIPE_CHOICES, default='20')
    drillDiameter = models.CharField(max_length=7, choices=DRILL_CHOICES, default='26')
