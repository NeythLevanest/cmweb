from builtins import sorted, ValueError
from time import timezone

from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser
# -*- coding: utf-8 -*-

import pygments.lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in pygments.lexers.get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


class UsuarioManager(BaseUserManager):
    def create_user(self,email,telefono,username,nombres,apellidos,password=None):
        if not email:
            raise ValueError('El usuario debe tener un correo electrónico')
        usuario = self.model(username = username,
                             email=self.normalize_email(email),
                             telefono = telefono,
                             nombres= nombres,
                             apellidos = apellidos,



        )
        usuario.set_password(password)
        usuario.save()
        return usuario
    def create_superuser(self,email,username,nombres,apellidos,password):
        usuario = self.create_user(
            email = email,
            username = username,
            nombres = nombres,
            apellidos = apellidos,
            password= password
        )
        usuario.usuario_administrador = True
        usuario.save()
        return usuario

class TblUsuario(AbstractBaseUser):
    Presidente = 'P'
    Vicepresidente = 'VP'
    Secretario = 'S'
    Tesorero = 'T'
    Cordinador = 'C'
    Senior = 'SN'
    Integrante = 'I'
    roles = [(Presidente, 'Presidente'), (Vicepresidente, 'Vicepresidente'), (Secretario, 'Secretario'), (Tesorero, 'Tesorero'), (Cordinador, 'Cordinador'), (Senior, 'Senior'),(Integrante, 'Integrante')]
    username = models.CharField('Nombre de Usuario', unique=True, max_length=20)
    email = models.EmailField('Email', unique=True, max_length=254)
    imgUser = models.ImageField('Imagen de Perfil', upload_to='media/perfil/', blank=True, null=True)
    nombres = models.CharField(max_length=200, blank=True, null=True)
    apellidos = models.CharField(max_length=200, blank=True, null=True)
    usuario_activo = models.BooleanField(default=False)
    usuario_administrador = models.BooleanField(default=False)
    rol = models.CharField(max_length=40, choices=roles, default=Integrante)
    activo = models.BooleanField(default=False)
    scoreActivity = models.IntegerField()

    #rol = models.ForeignKey(TblRol, on_delete=models.PROTECT, blank=True, null=True)
    objects = UsuarioManager()


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'nombres', 'apellidos']

    def __str__(self):
        return f'TblUsuario {self.nombres}{self.apellidos}'
    def has_perm(self, perm, obj = None):
        return True
    def has_module_perms(self, app_label):
        return True
    @property
    def is_staff(self):
        return self.usuario_administrador

class Proyecto(models.Model):
    titulo = models.CharField(max_length=200, default=None)
    descripcion = models.CharField(max_length=1000, default=None)
    mentor = models.CharField(max_length=100, default=None)
    Consultor = models.CharField(max_length=100, default=None)
    Equipo = models.CharField(max_length=400, default=None)
    imagenProject = models.ImageField()
    idUsuario = models.OneToOneField(TblUsuario, on_delete=models.PROTECT)

    def __str__(self):
        return str(self.id)

class Eventos(models.Model):
    titulo = models.CharField(max_length=200, default=None)
    descripcion = models.CharField(max_length=1000, default=None)
    fecha = models.DateField()
    imagenProject = models.ImageField()
    idUsuario = models.OneToOneField(TblUsuario, on_delete=models.PROTECT)

    def __str__(self):
        return str(self.id)

class Materiales(models.Model):
    nombre = models.CharField(max_length=200, default=None)
    descripcion = models.CharField(max_length=1000, default=None)
    código= models.CharField(max_length=10, default=None)
    estaPrestado = models.BooleanField(default=False)


    def __str__(self):
        return str(self.id)

class MaterialesPrestados(models.Model):
    idUsuario = models.ForeignKey(TblUsuario, on_delete=models.PROTECT)
    idMaterial = models.ForeignKey(Materiales, on_delete=models.PROTECT)
    fecha = models.DateField()


class Premio(models.Model):
    nombre = models.CharField(max_length=100, default=None)
    imagenProject = models.ImageField()
    scoreRequired = models.IntegerField()

class PremiosObtenidos(models.Model):
    idUsuario = models.ForeignKey(TblUsuario, on_delete=models.PROTECT)
    idPremio = models.ForeignKey(Premio, on_delete=models.PROTECT)
    fecha = models.DateField()