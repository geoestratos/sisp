#Django
from django.db import models
from django.db.models.deletion import CASCADE
#SISP Utils
from SISP.utils.models import BaseModel
from clusters.models import Well

class TrajectorySummary(BaseModel, models.Model):
    well =  models.ForeignKey(Well, on_delete=CASCADE, related_name="trajectory_summary", verbose_name="Pozo")
    trajectoryType =  models.CharField('TypeOfTrajectory', max_length=20)
    dls = models.FloatField('DLS', max_length=10)
    inclination = models.FloatField('inclinacion', max_length=20)
    totalDepth = models.FloatField('profundidad total', max_length=20)
    displacement = models.FloatField('desplazamiento', max_length=20)
    azimut = models.FloatField('azimut', max_length=20)

    def __str__(self):
        return self.well.name

class TrajectoryData(BaseModel, models.Model):
    well = models.ForeignKey(Well, on_delete=CASCADE, related_name="trajectory_data", verbose_name="Pozo")
    tvd = models.FloatField(max_length=10)
    md = models.FloatField(max_length=10)
    gridEast = models.FloatField('grid east', max_length=10)
    gridNorth = models.FloatField('grid north', max_length=10)

    def __str__(self):
        return self.well.name