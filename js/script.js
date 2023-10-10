
// Validación de formulario
document.addEventListener('DOMContentLoaded', function () {
  const formRegistro = document.getElementById('form-registro');
  formRegistro.addEventListener('submit', function (event) {

    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Los campos se validan acá
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const genero = document.getElementById('genero').value;
    const imagen = document.getElementById('imagen').value;
    const fechaNac = document.getElementById('fecha-nac').value;
    const clave = document.getElementById('clave').value;

    //Requisitos de validación
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

    // Si todas las validaciones pasan, se envía el formulario
    formRegistro.submit();
  });
});