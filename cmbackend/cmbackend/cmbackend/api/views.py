from django.contrib.auth.models import User, Group
from rest_framework import routers, serializers, viewsets

from .models import Usuario
from cmbackend.api.serializers import UserSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer