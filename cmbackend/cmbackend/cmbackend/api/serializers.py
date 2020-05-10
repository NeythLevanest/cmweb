from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Usuario


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('nombres', 'apellidos', 'mpoints', 'estado', 'img')