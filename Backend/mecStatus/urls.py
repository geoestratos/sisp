#Django
from django.db import router
from django.urls import path
from django.urls.conf import include

#RestFramework
from rest_framework import routers

#SISP Utilities
from mecStatus.views import TRstateViewset, GeoColumnViewset

router = routers.DefaultRouter()
router.register(r'geocolumn', GeoColumnViewset)
router.register(r'trstate', TRstateViewset)


urlpatterns = [
    path('mecstatus/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]