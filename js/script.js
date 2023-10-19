
// Validación de formulario
document.addEventListener('DOMContentLoaded', function () {
  const formRegistro = document.getElementById('form-registro');
  formRegistro.addEventListener('submit', function (event) {

    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const genero = document.getElementById('genero').value;
    const imagen = document.getElementById('imagen').value;
    const fechaNac = document.getElementById('fecha-nac').value;
    const clave = document.getElementById('clave').value;

    if (nombre === '') {
      alert('Por favor, ingresa tu nombre y apellido.');
      return;
    }

    if (correo === '' || !correo.includes('@')) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (isNaN(telefono) || telefono.length !== 10) {
      alert('Por favor, ingresa un número de teléfono válido.');
      return;
    }

    if (clave.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    formRegistro.submit();
  });
});

//API TheCocktailDB

document.getElementById('buscarCocktail').addEventListener('click', function () {
  const searchTerm = document.getElementById('cocktailSearch').value;

  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          mostrarResultado(data);
      })
      .catch(error => {
          console.error('Error al obtener los datos:', error);
      });
});

function mostrarResultado(data) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  if (data.drinks) {
      data.drinks.forEach(cocktail => {
          const nombre = cocktail.strDrink;
          const instrucciones = cocktail.strInstructions;

          const cocktailDiv = document.createElement('div');
          cocktailDiv.innerHTML = `<h2>${nombre}</h2><p>${instrucciones}</p>`;

          resultadoDiv.appendChild(cocktailDiv);
      });
  } else {
      resultadoDiv.innerHTML = '<p>No se encontraron cócteles.</p>';
  }
}

//Guardar datos del formulario:

document.getElementById("form-registro").addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let genero = document.getElementById("genero").value;
  let imagen = document.getElementById("imagen").value;
  let fechaNac = document.getElementById("fecha-nac").value;
  let contrasena = document.getElementById("clave").value;

  let datosUsuario = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      genero: genero,
      imagen: imagen,
      fechaNac: fechaNac,
      contrasena: contrasena
  };

  console.log(datosUsuario);

  document.getElementById("form-registro").reset();
});