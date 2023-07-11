from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm, fields, Form
from django.views.generic import CreateView
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from .models import Producto

class IniciarSesionForm(Form):
    username = forms.CharField(widget=forms.TextInput(), label="Correo")
    password = forms.CharField(widget=forms.PasswordInput(), label="Contraseña")
    class Meta:
        fields = ['username', 'password']

class RegistroForm(UserCreationForm):
    class Meta:
        model = User
        fields = [
                'username',
                'first_name',
                'last_name',
                'email',
                
            ]
        labels = {
                'username': 'Nombre de usuario',
                'first_name': 'Nombre',
                'last_name': 'Apellidos',
                'email': 'Correo',
            
        }

class ProductoForm(forms.ModelForm):
    
    class Meta :
        model = Producto
        fields= '__all__'