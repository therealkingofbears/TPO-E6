
// Validación de formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert('No has escrito nada en el correo');
      return;
    }
    let clave = document.getElementById('clave').value;
    if (clave.length < 8) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }