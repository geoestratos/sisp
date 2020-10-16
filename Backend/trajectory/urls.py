#Django
from django.urls.conf import include
from rest_framework import routers
from django.urls import path

#SISP Utilities
from trajectory.views import TrajectoryDataViewSet, TrajcetorySummaryViewSet

router = routers.DefaultRouter()
router.register(r'data', TrajectoryDataViewSet)
router.register(r'summary', TrajcetorySummaryViewSet)

urlpatterns = [
    path('trajectory/', include(router.urls)),
]