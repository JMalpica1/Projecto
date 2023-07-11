from django.urls import path
from .views import registro,home,iniciar_sesion,nosotros,tienda,agregar_productos
from core import views


urlpatterns = [
   
   path('registro/',registro,name="registro"),
   path('home/', views.home, name='home'),
   path('tienda/', views.tienda_view, name='tienda'),
   path('administrar_productos/<str:arg1>/<str:arg2>/', views.administrar_productos, name='administrar_productos'),
   path('cerrar-sesion/', views.cerrar_sesion, name='cerrar_sesion'),
   path('iniciar-sesion/', views.iniciar_sesion, name='iniciar_sesion'),
   path('nosotros/',views.nosotros, name="nosotros"),
   path('agregar-producto/',views.agregar_productos, name="agregar_producto"),

]
