
from django.contrib import admin
from .models import GeoColumn, TRstate

# Register your models here.

@admin.register(GeoColumn, TRstate)

class MsStatusAdmin(admin.ModelAdmin):
    pass