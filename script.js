// Tu código JSON (el JSON de infracciones que proporcioné anteriormente)
var infracciones = {
  "infracciones": [
   {
      "articulo": "1.1",
      "descripcion": "Falta de habilitación"
    },
    {
      "articulo": "2.2",
      "descripcion": "Estacionamiento indebido"
    },
  ]
  
};

// ... (código JSON y otras funciones)

function quitarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscarInfraccionPorDescripcion(descripcion) {
  // Convierte la descripción de la infracción y la entrada del usuario a minúsculas y sin acentos
  descripcion = quitarAcentos(descripcion.toLowerCase());

  // Recorre todas las infracciones en el JSON
  for (var i = 0; i < infracciones.infracciones.length; i++) {
    // Convierte la descripción de la infracción a minúsculas y sin acentos
    var descripcionInfraccion = quitarAcentos(infracciones.infracciones[i].descripcion.toLowerCase());

    // Compara las descripciones sin ser sensibles a mayúsculas y acentos
    if (descripcionInfraccion === descripcion) {
      // Devuelve la información de la infracción si se encuentra
      return infracciones.infracciones[i];
    }
  }
  // Retorna null si no se encuentra ninguna infracción con la descripción proporcionada
  return null;
}

function realizarBusqueda() {
  var descripcionInput = document.getElementById("descripcionInput").value;
  var infraccionEncontrada = buscarInfraccionPorDescripcion(descripcionInput);
  var resultadoDiv = document.getElementById("resultado");

  if (infraccionEncontrada) {
    resultadoDiv.innerHTML = "<strong>Infracción encontrada:</strong><br>" +
      "<strong>Artículo:</strong> " + infraccionEncontrada.articulo + "<br>" +
      "<strong>Descripción:</strong> " + infraccionEncontrada.descripcion;
  } else {
    resultadoDiv.innerHTML = "Infracción no encontrada.";
  }
}
