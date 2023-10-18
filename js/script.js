
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

    if (isNaN(telefono) || telefono.length !== 10) {
      alert('Por favor, ingresa un número de teléfono válido.');
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

//API TheCocktailDB

document.getElementById('buscarCocktail').addEventListener('click', function () {
  // Obtener el valor del campo de búsqueda
  const searchTerm = document.getElementById('cocktailSearch').value;

  // URL de la API con el término de búsqueda
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  // Realizar la solicitud a la API utilizando fetch
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
  resultadoDiv.innerHTML = ''; // Limpia contenido anterior

  if (data.drinks) {
      data.drinks.forEach(cocktail => {
          const nombre = cocktail.strDrink;
          const instrucciones = cocktail.strInstructions;

          // Crea elementos HTML para mostrar la información
          const cocktailDiv = document.createElement('div');
          cocktailDiv.innerHTML = `<h2>${nombre}</h2><p>${instrucciones}</p>`;

          // Agrega el elemento al resultado
          resultadoDiv.appendChild(cocktailDiv);
      });
  } else {
      resultadoDiv.innerHTML = '<p>No se encontraron cócteles.</p>';
  }
}