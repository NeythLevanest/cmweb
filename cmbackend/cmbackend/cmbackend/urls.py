
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from django.urls import path, include
from rest_framework.routers import DefaultRouter

import cmbackend.appcmback
from cmbackend.appcmback.urls import router

from cmbackend.cmbackend import settings


from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path(r'api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('cmbackend.appcmback.urls')),
    path('', include(router.urls)),
    path(r'api-token-auth/', obtain_jwt_token),
    path(r'api-token-refresh/', refresh_jwt_token),
]
if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

