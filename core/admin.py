from django.contrib import admin
from .models import PerfilUsuario, Producto,Categoria




# Register your models here.
admin.site.register(PerfilUsuario)
admin.site.register(Categoria)
admin.site.register(Producto)