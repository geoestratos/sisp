from django.contrib import admin
#Django
from django.db import router
from django.urls import path
from django.urls.conf import include

#RestFramework
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token


admin.AdminSite.site_header = "El Aguila"
admin.AdminSite.site_title = "El Aguila"
admin.AdminSite.index_title = "Panel administrativo"


urlpatterns = [
    path('jet/', include('jet.urls', 'jet')),
    path('admin/', admin.site.urls),
    path('', include(('mecStatus.urls', 'mecstatus'), namespace='mecstatus')),
    path('', include(('trajectory.urls', 'trajectory'), namespace='trajectory')),
    path('token-auth/', obtain_jwt_token)
]
