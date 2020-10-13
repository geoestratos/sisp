from django.contrib import admin

from trajectory.models import Trajectory
# Register your models here.

@admin.register(Trajectory)

class TrajetoryDataAdmin(admin.ModelAdmin):
    pass
