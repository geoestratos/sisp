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
router.register(r'users', vsisp.UserViewSet)
router.register(r'groups', vsisp.GroupViewSet)

router = routers.DefaultRouter()
router.register(r'geo_column', views.GeoColumnViewset)
router.register(r'tr_state', views.TRViewset)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
