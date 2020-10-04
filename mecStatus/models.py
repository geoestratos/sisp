'''Mechanic Status module'''

#Django
from django.db import models
from django.db.models.deletion import CASCADE

#SISP utilities
from clusters.models import Well
from SISP.utils.models import BaseModel, BaseMecStatus



class MecStatus(BaseModel, models.Model):
    '''Module from the principal app.'''
    '''well = models.ForeignKey(Well, on_delete=CASCADE, related_name='mecStatuses')

    def __str__(self):
        return self.well.name
'''
    name = models.CharField('name', max_length=12, default=None)
    
    def __str__(self):
        return self.name
    

class GeoColumn(BaseModel, BaseMecStatus, models.Model):
    ''' Submodule from Mechanic status, this represent the 
    Geological column chart'''

    LAYERS_CHOICES = (
    ('T.A','T.A'),
    ('RPLCN', 'RPLCN'),
    ('PLCNM', 'PLCNM'),
    ('PLCNS', 'PLCNS'),
    ('PLCNI', 'PLCNI'),
    ('MS', 'MS'),
    ('YAC-8', 'YAC-8'),
    ('YAC-7', 'YAC-7'),
    ('YAC-6', 'YAC-6'),
    ('YAC-5', 'YAC-5'),
    ('YAC-4', 'YAC-4'),
    ('YAC-3', 'YAC-3'),
    ('YAC-2', 'YAC-2'),
    ('YAC-1', 'YAC-1'),
)
    mecStatus = models.ForeignKey(MecStatus, on_delete=CASCADE, related_name='geoColumns')
    layer = models.CharField('GeologicalLayer', max_length=7, choices=LAYERS_CHOICES, default='T.A')
    
    def __str__(self):
        return self.layer

PIPE_CHOICES = (
    ('20', '20'),
    ('13 3/8', '13 3/8'),
    ('9 5/8', '9 5/8'),
    ('7', '7'),
)

DRILL_CHOICES = (
    ('26', '26'),
    ('16', '16'),
    ('12 1/4', '12 1/4'),
    ('8 1/2', '8 1/2'),

)

class TRstate(BaseModel, BaseMecStatus, models.Model):
    ''' Submodule from Mechanic status, this represent 
    the Pipe lines chart'''
    mecStatus = models.ForeignKey(MecStatus, on_delete=CASCADE, related_name='trStates')
    pipeDiameter = models.CharField(max_length=7, choices=PIPE_CHOICES, default='20')
    drillDiameter = models.CharField(max_length=7, choices=DRILL_CHOICES, default='26')

    def __str__(self):
        return self.pipeDiameter