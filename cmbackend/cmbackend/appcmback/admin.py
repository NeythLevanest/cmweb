# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from appcmback.models import TblUsuario, Proyecto, Eventos, Materiales, MaterialesPrestados, Premio, PremiosObtenidos

admin.site.register(TblUsuario)
admin.site.register(Proyecto)
admin.site.register(Eventos)
admin.site.register(Materiales)
admin.site.register(MaterialesPrestados)
admin.site.register(Premio)
admin.site.register(PremiosObtenidos)




