from django.contrib import admin
#Django
from django.db import router
from django.urls import path
from django.urls.conf import include

#RestFramework
from rest_framework import routers


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(('mecStatus.urls', 'mecstatus'), namespace='mecstatus')),
    path('', include(('trajectory.urls', 'trajectory'), namespace='trajectory'))
]
