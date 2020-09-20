from __future__ import unicode_literals

from django.db.models import Q
from django.http import HttpResponse
from rest_framework.decorators import action, api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from rest_framework import viewsets, permissions, filters, status
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from cmbackend.appcmback.models import *
from cmbackend.appcmback.serializers import *

class UsuariosViewSet(viewsets.ModelViewSet):
    #permission_classes = [permissions.AllowAny]
    serializer_class = UsuarioSerializer
    queryset = TblUsuario.objects.all()

class RegisterViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = UsuarioSerializer
    queryset = TblUsuario.objects.all()
    filter_fields = ['cedula']
    search_fields = ['cedula']
    filter_backends = (SearchFilter, filters.DjangoFilterBackend)

    @action(detail=True, methods=['POST'])
    def post(self, validated_data):
        if validated_data.data.is_authenticated():
            return Response({'detail': 'You are already registered and are authenticated.'}, status=400)
        data = validated_data.data
        username = data.get('username')  # username or email address
        email = data.get('email')
        cedula = data.get('cedula')

        qs = TblUsuario.objects.filter(
            Q(username=username) |
            Q(email=email) |
            Q(cedula=cedula)
        )

        if qs.exists():
            return Response({"detail": "This user already exists"}, status=401)
        else:
            usuario = TblUsuario.objects.create_user(
                username=validated_data['username'],
                email=validated_data['email'],
                nombres=validated_data['nombres'],
                apellidos=validated_data['apellidos'],
                cedula=validated_data['cedula'],
                telefono = validated_data['cedula']

            )
            usuario.make_password(validated_data['password'])
            usuario.save()
            return Response({'detail': "Thank you for registering. Please verify your email."}, status=201)
        return Response({"detail": "Invalid Request"}, status=400)


class ProyectoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer


class EventosViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Eventos.objects.all()
    serializer_class = EventosSerializer

class MaterialesViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Materiales.objects.all()
    serializer_class = MaterialesSerializer

class MaterialesPrestadosViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = MaterialesPrestados.objects.all()
    serializer_class = MaterialesPrestadosSerializer

class PremiosViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Premio.objects.all()
    serializer_class = PremiosSerializer


class PremiosObtenidosViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = PremiosObtenidos.objects.all()
    serializer_class = PremiosObtenidosSerializer