$(document).ready(function () {
  $.validator.addMethod(
    "rutChileno",
    function (value, element) {
      value = value.replace(/[.-]/g, "");

      if (value.length < 8 || value.length > 9) {
        return false;
      }

      var validChars = "0123456789K";
      var lastChar = value.charAt(value.length - 1).toUpperCase();
      if (validChars.indexOf(lastChar) == -1) {
        return false;
      }

      var rut = parseInt(value.slice(0, -1), 10);
      var factor = 2;
      var sum = 0;
      var digit;
      while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
      }
      var dv = 11 - (sum % 11);
      dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

      return dv === lastChar;
    },
    "Por favor ingrese un RUT válido."
  );

  $("#formulario1").validate({
    rules: {
      nombre: "required",

      apellido: "required",

      direccion: "required",

      ciudad: "required",

      codigoZip: "required",

      codigo: "required",

      id: "required",

      descripcion: "required",

      precio: "required",

      descuentosus: "required",

      descuentof: "required",

      cantidad: "required",

      rut: {
        required: true,
        rutChileno: true,
      },
      correo: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      nombre: {
        required: "El nombre es un campo obligatorio",
      },

      apellido: {
        required: "El apellido es un campo obligatorio",
      },

      direccion: {
        required: "La dirección es un campo obligatorio",
      },

      ciudad: {
        required: "La ciudad es un campo requerido",
      },

      codigoZip: {
        required: "Debe ingresar un código zip",
      },

      rut: {
        required: "El rut es un campo obligatorio",
        rutChileno: "El formato del rut no es válido",
      },
      correo: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },

      codigo: {
        required: "debe ingresar un codigo",
      },

      id: {
        required: "debe ingresar un id",
      },

      precio: {
        required: "debe ingresar un precio",
      },

      descuentosus: {
        required: "Debe ingresar descuento",
      },

      descuentof: {
        required: "Debe ingresar descuento",
      },

      cantidad: {
        required: "Debe ingresar cantidad",
      },
    },
  });
});
