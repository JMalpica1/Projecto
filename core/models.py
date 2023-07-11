from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class PerfilUsuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rut = models.CharField(max_length=80, blank=True, null=True, verbose_name="Rut")
    direccion = models.CharField(max_length=80, blank=True, null=True, verbose_name="Dirección")

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} ({self.user.email})"

class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True)
    categoria = models.CharField(max_length=50,null=False)
    
    def _str_(self):   
        return self.nombreCategoria   

class Producto(models.Model):
    CodigoProducto = models.IntegerField(primary_key=True, verbose_name="Codigo Producto")
    nombre = models.CharField(max_length=80, blank=False, null=False, verbose_name="Nombre Producto")
    descripcion = models.CharField(max_length=120, blank=False, verbose_name="Descripcion")
    precio = models.IntegerField(blank=False, null=False)
    imagen = models.ImageField(upload_to="images/", default="sinfoto.jpg", null=False, blank=False, verbose_name="Imagen")
    descuentoOferta = models.DecimalField(max_digits=3, decimal_places=1)
    descuentoSuscriptor = models.DecimalField(max_digits=3, decimal_places=1)
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)



def __str__(self):
        return self.CodigoProducto
    
    
