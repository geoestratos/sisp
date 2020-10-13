#Django
from django.urls.conf import include
from rest_framework import routers
from rest_framework import urlpatterns
from django.urls import path

#SISP Utilities
from trajectory.views import TrajectoryDataViewSet

router = routers.DefaultRouter()
router.register(r'trajectory', TrajectoryDataViewSet)

urlpatterns = [
    path('trajectory/', include(router.urls)),
]