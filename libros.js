document.addEventListener("DOMContentLoaded", function () {
  var apiUrl = "http://openlibrary.org/people/george08/lists/OL97L/seeds.json";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      mostrarDatos(data);
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
});

function mostrarDatos(data) {
  var listaProductos = document.getElementById("listaProductos");
  var json = data.entries;

  json.forEach(function (libro) {
    const image = document.createElement("img");
    image.src = libro.picture.url;
    listaProductos.appendChild(image);
    const text = document.createElement("p");
    text.textContent = libro.title;
    listaProductos.appendChild(text);
  });
}
