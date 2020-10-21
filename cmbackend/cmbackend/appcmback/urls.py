from django.urls import path
from django.conf.urls import include
from rest_framework.urlpatterns import format_suffix_patterns

from appcmback import views

from appcmback.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'usuarios', UsuariosViewSet)
router.register(r'registrarUsuario', RegisterViewSet)
router.register(r'proyectos', ProyectoViewSet)
router.register(r'eventos', EventosViewSet)
router.register(r'materiales', MaterialesViewSet)
router.register(r'prestamoMateriales', MaterialesPrestadosViewSet)
router.register(r'premios', PremiosViewSet)
router.register(r'obtenerPremios', PremiosObtenidosViewSet)


urlpatterns = router.urls
"""urlpatterns= format_suffix_patterns([
    path('servicios/', servicio_list, name='servicio-list'),
])"""



""" urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('users/', views.UsuariosList.as_view()),

] 

urlpatterns = format_suffix_patterns(urlpatterns)"""