
from django.shortcuts import render, redirect
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import RemoteUserAuthentication
from rest_framework.decorators import permission_classes
from .models import Producto
from .forms import IniciarSesionForm, ProductoForm
from django.contrib.auth import authenticate, login
from django.contrib import messages
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from .forms import RegistroForm
from django.contrib.auth import login, logout, authenticate
import requests
from django.shortcuts import render


 #Registro Y Login 
    
def home(request):
    return render(request, "core/home.html")

def iniciar_sesion(request):
    data = {"mesg": "", "form": IniciarSesionForm()}

    if request.method == "POST":
        form = IniciarSesionForm(request.POST)
        if form.is_valid:
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect(home)
                else:
                    data["mesg"] = "¡La cuenta o la password no son correctos!"
            else:
                data["mesg"] = "¡La cuenta o la password no son correctos!"
    return render(request, "core/iniciar_sesion.html", data)

def cerrar_sesion(request):
    logout(request)
    return redirect(home)

def registro(request):
    
    data= {
        
        'form':RegistroForm()
    }
    return render(request, 'registration/registro.html',data )

#Urls webs


def home(request):
    
    productos = Producto.objects.all()
    
    data={
        
        'producto':productos
    }
    return render(request, 'core/home.html',data)

def tienda(request):
    
    url = 'https://fakestoreapi.com/products'
    response = requests.get(url)

    
    products = response.json()

   
    context = {'products': products}

    return render(request, 'tienda.html', context)

def tienda_view(request):
    # Código de la vista tienda aquí
    return render(request, 'core/tienda.html')

def nosotros(request):
    # Código de la vista tienda aquí
    return render(request, 'core/nosotros.html')

def agregar_productos(request):
    
    data = {
        
        'form': ProductoForm()
        
    }
    return render(request,'producto/agregar.html', data)


def administrar_productos(request, arg1, arg2):
   
    return render(request, 'core/administrar_productos.html', context)