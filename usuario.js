document.addEventListener("DOMContentLoaded", function () {
  var apiUrl = "http://localhost:8081/usuario/todos";

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
  var listaProductos = document.getElementById("listaUsuarios");
  console.log(data);
  data.forEach(function (usuario) {
    var div = document.createElement("div");
    const apellido = document.createElement("p");
    const nombre = document.createElement("p");
    const codigoPostal = document.createElement("p");
    const email = document.createElement("p");
    const localidad = document.createElement("p");
    const provincia = document.createElement("p");
    apellido.textContent = "apellido: " + usuario.apellido;
    nombre.textContent = "nombre: " + usuario.nombre;
    codigoPostal.textContent = "codigoPostal: " + usuario.codigoPostal;
    email.textContent = "email: " + usuario.email;
    localidad.textContent = "localidad: " + usuario.localidad;
    provincia.textContent = "provincia: " + usuario.provincia;

    div.appendChild(apellido);
    div.appendChild(nombre);
    div.appendChild(email);
    div.appendChild(localidad);
    div.appendChild(nombre);
    div.appendChild(provincia);
    div.appendChild(codigoPostal);

    listaProductos.appendChild(div);
    const hr = document.createElement("hr");
    listaProductos.appendChild(hr);
  });
}
