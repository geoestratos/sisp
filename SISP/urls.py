from django.contrib import admin
#Django
from django.db import router
from django.urls import path
from django.urls.conf import include

#RestFramework
from rest_framework import routers
from mecStatus.views import MecStatusViewset


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(('mecStatus.urls', 'mecstatus'), namespace='mecstatus')),
   
]
