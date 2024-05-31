const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  if (
    (email.value === "" || email.value == null) &&
    (password.value === "" || password.value == null)
  ) {
    e.preventDefault();
    alert("El email y contraseña no pueden estar vacio");
  } else if (email.value === "" || email.value == null) {
    alert("El email no puede estar vacio");
  } else if (password.value === "" || password.value == null) {
    e.preventDefault();
    alert("La contraseña no puede estar vacio");
  }
});
