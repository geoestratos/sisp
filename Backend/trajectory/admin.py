#Django
from django.contrib import admin
#SISP
from .models import  DepthData, Summary
#Utilities
from import_export import resources
from import_export.admin import ImportExportModelAdmin

class  DepthDataResources(resources.ModelResource):
    class Meta:
        model = DepthData

@admin.register(DepthData)
class DepthDataAdmin(ImportExportModelAdmin ,admin.ModelAdmin):
    list_display = ('well', 'md', 'tvd',)
    resource_class =  DepthDataResources

@admin.register(Summary)
class SummaryAdmin(admin.ModelAdmin):
    pass