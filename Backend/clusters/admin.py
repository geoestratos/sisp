#Django
from django.contrib import admin

#SISP Models
from .models import Cluster, Equipment, Well

# Register your models here.

@admin.register(Cluster, Equipment, Well)

class ClusterAdmin (admin.ModelAdmin):
    pass

