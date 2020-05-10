# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.
class ResponsabilidadesLevel(models.Model):
    redsocial = models.BooleanField()
    peventos = models.BooleanField()
    eslider = models.BooleanField()
    nivelproyecto = models.BooleanField()

class Premios(models.Model):
    imgpremio = models.ImageField()
    nombre = models.CharField(max_length=20)
    mpoints = models.IntegerField()
    nivel = models.CharField(max_length=20)

class Usuario(models.Model):
    ROL = (
        ('A', 'Administrador'),
        ('I', 'Integrante')
    )
    apellidos = models.CharField(max_length=60)
    nombre = models.CharField(max_length=60)
    rol = models.CharField(max_length=1, choices=ROL)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=60)
    agedate = models.DateField()
    mpoints = models.IntegerField()
    estado = models.CharField(max_length=25)
    imgpath = models.ImageField()
    responsabilidades = models.OneToOneField(ResponsabilidadesLevel)

class PremiosObtenidos(models.Model):
    fecha = models.DateField()
    nombre = models.CharField(max_length=20)
    imgpremio = models.ImageField(blank=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class PrestamoMateriales (models.Model):
    ESTADOS = (
        ('D', 'Devuelto'),
        ('N', 'No Devuelto'),
        ('F', 'Devuelto con atraso')
    )
    fechaprestamo = models.DateTimeField()
    fechadevolucion = models.DateTimeField()
    estado = models.CharField(max_length=1, choices=ESTADOS)
    cantidad = models.IntegerField()
    usuario = models.ManyToManyField(Usuario)

class Proyectos(models.Model):
    nombres = models.CharField(max_length=200)
    introduccion = models.CharField(max_length=20000)
    objetivo = models.CharField(max_length=5000)
    descripcion = models.CharField(max_length=30000)
    imgproyecto = models.ImageField()
    integrantes = models.ManyToManyField(Usuario)


class Materiales(models.Model):
    cod = models.CharField(primary_key=True, max_length=10)
    img = models.ImageField(blank=True)
    nombre = models.CharField(max_length=100)
    cantdisponible = models.IntegerField()
    categoria = models.CharField(max_length=20)
    prestamos = models.ForeignKey(PrestamoMateriales, on_delete=models.CASCADE)



