$(document).ready(function() {
  $.validator.addMethod(
    "customEmail",
    function(value, element) {
      var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return this.optional(element) || emailPattern.test(value);
    },
    "Por favor, ingresa un correo electrónico válido."
  );

  $.extend($.validator.messages, {
    required: "Este campo es obligatorio.",
    email: "Por favor, ingresa un correo electrónico válido.",
    minlength: $.validator.format("Por favor, ingresa al menos 6 caracteres."),
    maxlength: $.validator.format("Por favor, no ingreses más de 10 caracteres.")
  });

  $("#login-form").validate({
    rules: {
      email: {
        required: true,
        customEmail: true
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 10
      }
    },
    messages: {
      email: {
        required: "Por favor, ingresa un correo electrónico.",
        customEmail: "Por favor, ingresa un correo electrónico válido."
      },
      password: {
        required: "Por favor, ingresa tu contraseña.",
        minlength: "La contraseña debe tener al menos 6 caracteres.",
        maxlength: "La contraseña no debe exceder los 10 caracteres."
      }
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") === "email") {
        error.insertAfter(element);
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass(errorClass).removeClass(validClass);
      $(element).closest(".form-group").addClass("has-error");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass(errorClass).addClass(validClass);
      $(element).closest(".form-group").removeClass("has-error");
    }
  });
});
