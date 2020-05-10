# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from cmbackend.api.models import Usuario, ResponsabilidadesLevel, PremiosObtenidos, Premios

admin.site.register(Usuario)
admin.site.register(ResponsabilidadesLevel)
admin.site.register(Premios)
admin.site.register(PremiosObtenidos)