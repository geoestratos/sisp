#Django
from django.db import models
from django.db.models.deletion import CASCADE
#SISP Utils
from SISP.utils.models import BaseModel
from clusters.models import Well

class Summary(BaseModel, models.Model):
    well =  models.ForeignKey(Well, on_delete=CASCADE, related_name="trajectory_summary", verbose_name="Pozo")
    trajectoryType =  models.CharField(
                    'Tipo de trayectoria', 
                    choices=(
                            ('Vertical', 'Vertical'), 
                            ('J', 'J'),
                            ('S', 'S'),
                            ('Horizontal', 'Horizontal'),
                            ), 
                    default='Vertical', 
                    help_text='Determines which trajectory type is',
                    max_length=10,        
                    )
    actualDepth = models.FloatField('Profundidad actual', max_length=20)
    finalDepth = models.FloatField('Profundidad final', max_length=20)
    actualVDepth = models.FloatField('Profundidad actual', max_length=20)
    finalVDepth = models.FloatField('Profundidad final', max_length=20)
    actualInclination = models.FloatField('Inclinacion actual', max_length=20)
    maxInclination = models.FloatField('Inclinacion maxima', max_length=20)
    displacement = models.FloatField('Desplazamiento', max_length=20)
    azimut = models.FloatField('Azimut', max_length=20)

    def __str__(self):
        return self.well.name

    class Meta:
        verbose_name_plural='Tablas de resumen'

class DepthData(BaseModel, models.Model):
    well = models.ForeignKey(Well, on_delete=CASCADE, related_name="trajectory_data", verbose_name="Pozo")
    tvd = models.FloatField(max_length=10)
    md = models.FloatField(max_length=10)
    gridEast = models.FloatField('grid east', max_length=10)
    gridNorth = models.FloatField('grid north', max_length=10)

    def __str__(self):
        return self.well.name

    class Meta:
        verbose_name_plural='Datos de profundidad'