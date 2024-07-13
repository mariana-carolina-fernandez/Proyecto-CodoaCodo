function enviarDatos() {
  var email = document.getElementById("email").value;
  var contrasenia = document.getElementById("contrasenia").value;
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var localidad = document.getElementById("localidad").value;
  var provincia = document.getElementById("provincia").value;
  var postal = document.getElementById("postal").value;

  var datos = {
    email: email,
    contra: contrasenia,
    nombre: nombre,
    apellido: apellido,
    localidad: localidad,
    provincia: provincia,
    codigoPostal: postal,
  };

  var json = JSON.stringify(datos);

  var url = "http://localhost:8081/usuario/crear";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta de la API:", data);
    })
    .catch((error) => {
      console.error("Error al enviar datos:", error);
    });
}
