#Django
from django.urls.conf import include
from rest_framework import routers
from django.urls import path

#SISP Utilities
from trajectory.views import DepthDataViewSet, SummaryViewSet

router = routers.DefaultRouter()
router.register(r'data', DepthDataViewSet)
router.register(r'summary', SummaryViewSet)

urlpatterns = [
    path('trajectory/', include(router.urls)),
]