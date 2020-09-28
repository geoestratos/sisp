
from django.contrib import admin
from .models import MecStatus, GeoColumn, TRstate

# Register your models here.

@admin.register(MecStatus, GeoColumn, TRstate)

class MsStatusAdmin(admin.ModelAdmin):
    pass