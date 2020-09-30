from django.contrib import admin
#Django
from django.db import router
from django.urls import path
from django.urls.conf import include

#RestFramework
from rest_framework import routers

#SISP Utilities
from mecStatus import views
from . import views as vsisp


router = routers.DefaultRouter()
router.register(r'mecstatus', views.MecStatusViewset)
router.register(r'geocolumn', views.GeoColumnViewset)
router.register(r'trstate', views.TRViewset)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
