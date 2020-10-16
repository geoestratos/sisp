#Django
from django.contrib import admin
#SISP
from trajectory.models import TrajectoryData, TrajectorySummary
#Utilities
from import_export import resources
from import_export.admin import ImportExportModelAdmin

class TrajectoryDataResources(resources.ModelResource):
    class Meta:
        model = TrajectoryData


@admin.register(TrajectoryData)
class TrajetoryDataAdmin(ImportExportModelAdmin ,admin.ModelAdmin):
    list_display = ('well', 'md', 'tvd',)
    resource_class = TrajectoryDataResources

@admin.register(TrajectorySummary)
class TrajectorySummaryAdmin(admin.ModelAdmin):
    pass