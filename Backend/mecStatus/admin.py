#Django
from django.contrib import admin

#SISP
from .models import GeoColumn, TRstate
 
#Utilities
from import_export import resources
from import_export.admin import ImportExportModelAdmin


class GeoColumnResources(resources.ModelResource):
    class Meta:
        model = GeoColumn

@admin.register(GeoColumn)
class GeoColumnAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = GeoColumnResources
    fields = [
        'orderId',
        'startMd',
        'endMd',
        
    ]

class TRstateResources(resources.ModelResource):
    class Meta:
        model = TRstate

@admin.register(TRstate)
class TRstateAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = TRstateResources
