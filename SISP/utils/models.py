#Django utilities
from django.db import models



class BaseModel (models.Models):
    ''' Base models acts as an abstract base class from wich every other models in the project. 
    This class provide the following attributes
    + created (DateTime)
    + modified (DateTime)
    '''
    created = models.DateTimeField(
        'created',
        auto_now_add=True,
        help_text='Date time on which the object was created'
    )
    modified = models.DateTimeField(
        'modified',
        auto_now=True,
        help_text='Date time on which the object was last    modified'
    )

    class Meta:
        """Meta option"""
        abstract = True
        get_latest_by= 'created'
        ordering= ['-created', 'modified']

class BaseMecStatus (models.Models):
    '''This base models acts as an abstract base class from Mechanic Status submodules'''
    startMd = models.FloatField(max_length=10)
    startTvd = models.FloatField(max_length=10)
    endMd = models.FloatField(max_length=10)
    endTvd = models.FloatField(max_length=10)
    programType = models.CharField('Type of program', max_length=4, choices=(('plan'), ('real')), default='plan')

    class Meta:
        """Meta option"""
        abstract = True
        get_latest_by= 'created'
        ordering= ['-created', 'modified']