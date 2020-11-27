#Django utilities
from django.db import models


class BaseModel (models.Model):
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


class BaseMecStatus (models.Model):
    '''This base models acts as an abstract base class from Mechanic Status submodules'''
    orderId = models.IntegerField(
        'Identificador de orden', 
        default=0, 
        help_text='Specify which is the print order'
        )
    programType = models.CharField(
        'Tipo de programa', 
        max_length=4, 
        choices=(('plan', 'plan'), ('real', 'real')), 
        default='plan', 
        help_text='Determines which program type is'
        )

    class Meta:
        """Meta option"""
        abstract = True
        get_latest_by= 'created'
        ordering= ['-created', 'modified']