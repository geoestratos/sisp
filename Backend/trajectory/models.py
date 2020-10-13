#Django
from django.db import models
from django.db.models.deletion import CASCADE
#SISP Utils
from SISP.utils.models import BaseModel
from clusters.models import Well

class Trajectory(BaseModel, models.Model):
    well =  models.ForeignKey(Well, on_delete=CASCADE, related_name="well", verbose_name="Well")
    trajectoryType =  models.CharField('TypeOfTrajectory', max_length=20)
    dls = models.FloatField('DLS', max_length=10)
    inclination = models.FloatField(max_length=20)
    totalDepth = models.FloatField(max_length=20)
    displacement = models.FloatField(max_length=20)
    azimut = models.FloatField(max_length=20)

class TrajectoryData(BaseModel, models.Model):
    trajectory = models.ForeignKey(Trajectory, on_delete=CASCADE, related_name="trajectory_data", verbose_name="Trajectory")
    tvd = models.FloatField(max_length=10)
    md = models.FloatField(max_length=10)
    gridEast = models.FloatField(max_length=10)
    gridNorth = models.FloatField(max_length=10)