
// Validación de formulario
document.addEventListener('DOMContentLoaded', function () {
  const formRegistro = document.getElementById('form-registro');
  formRegistro.addEventListener('submit', function (event) {
      // Evita que el formulario se envíe automáticamente
      event.preventDefault();

      // Realiza la validación de los campos aquí
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const genero = document.getElementById('genero').value;
      const imagen = document.getElementById('imagen').value;
      const fechaNac = document.getElementById('fecha-nac').value;
      const clave = document.getElementById('clave').value;

      // Puedes agregar más validaciones según tus requisitos
      if (nombre === '') {
          alert('Por favor, ingresa tu nombre y apellido.');
          return;
      }

      if (correo === '' || !correo.includes('@')) {
          alert('Por favor, ingresa un correo electrónico válido.');
          return;
      }

      if (clave.length < 8) {
          alert('La contraseña debe tener al menos 8 caracteres.');
          return;
      }

      // Si todas las validaciones pasan, puedes enviar el formulario
      formRegistro.submit();
  });
});