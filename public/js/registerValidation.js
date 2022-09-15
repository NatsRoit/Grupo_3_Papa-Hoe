//window.onload = function(){

//para ubicar el cursor en el campo nombre de una
let formulario = document.querySelector(".formulario");
formulario.nombre.focus();

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  let errors = [];

  let nombre = document.querySelector("#nombre");
  let apellido = document.querySelector("#apellido");
  let usuario = document.querySelector("#usuario");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirm_password");
  let province = document.querySelector("#province");
  let country = document.querySelector("#country");
  let direccion = document.querySelector("#direccion");
  let localidad = document.querySelector("#localidad");
  let codigoPostal = document.querySelector("#codigoPostal");
  let telefono = document.querySelector("#telefono");

  //VALIDACION NOMBRE
  if (nombre.value == "" || nombre.value.length < 3) {
    errors.push(
      "El campo nombre no puede estar vacio y debe tener mas de dos caracteres"
    );
    nombre.classList.add("is-invalid");
  } else {
    nombre.classList.add("form-input");
    nombre.classList.remove("is-invalid");
  }

  //VALIDACION APELLIDO
  if (apellido.value == "" || apellido.value.length < 2) {
    errors.push("El campo nombre no puede estar vacio y debe tener mas de dos caracteres");
    apellido.classList.add("is-invalid");
  } else {
    apellido.classList.add("form-input");
    apellido.classList.remove("is-invalid");
  }

  //VALIDACION USUARIO
  if (usuario.value == "" || usuario.value.length < 2) {
    errors.push("El campo Usuario no puede estar vacio y debe tener mas de dos caracteres");
    usuario.classList.add("is-invalid");
  } else {
    usuario.classList.add("form-input");
    usuario.classList.remove("is-invalid");
  }

  //VALIDACION EMAIL

   if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    email.classList.add("is-invalid");
    errors.push("El email tiene que ser valido");
  } else {
    
    email.classList.add("form-input");
    email.classList.remove("is-invalid");
  }

  //VALIDACION PASSWORD
  if (password.value == "" || password.value.length < 8) {
    errors.push("El campo password no puede estar vacío y tiene que tener mas de 8 caracteres");
    password.classList.add("is-invalid");
  } else {
    password.classList.add("form-input");
    password.classList.remove("is-invalid");
  }

  //VALIDACION CONFIRMPASSWORD
  if (confirmPassword.value == "" || password.value != confirmPassword.value) {
    errors.push("Debes cofirmar la password");
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPassword.classList.add("form-input");
    confirmPassword.classList.remove("is-invalid");
  }

  //VALIDACION PROVINCE
  if (province.value == "") {
    errors.push("El campo provincia no puede estar vacio");
    province.classList.add("is-invalid");
  } else {
    province.classList.add("form-input");
    province.classList.remove("is-invalid");
  }

  //VALIDACION COUNTRY
  if (country.value == "") {
    errors.push("El campo pais no puede estar vacio");
    country.classList.add("is-invalid");
  } else {
    country.classList.add("form-input");
    country.classList.remove("is-invalid");
  }

  //VALIDACION DIRECCION
  if (direccion.value == "") {
    errors.push("El campo direccion no puede estar vacio");
    direccion.classList.add("is-invalid");
  } else {
    direccion.classList.add("form-input");
    direccion.classList.remove("is-invalid");
  }

  //VALIDACION LOCALIDAD
  if (localidad.value == "") {
    errors.push("El campo localidad no puede estar vacio");
    localidad.classList.add("is-invalid");
  } else {
    localidad.classList.add("form-input");
    localidad.classList.remove("is-invalid");
  }

  //VALIDACION CP
  if (codigoPostal.value == "") {
    errors.push("El campo codigo postal no puede estar vacio");
    codigoPostal.classList.add("is-invalid");
  } else {
    codigoPostal.classList.add("form-input");
    codigoPostal.classList.remove("is-invalid");
  }

  //VALIDACION TELEFONO
  if (telefono.value == "") {
    errors.push("El campo telefono no puede estar vacio");
    telefono.classList.add("is-invalid");
  } else {
    telefono.classList.add("form-input");
    telefono.classList.remove("is-invalid");
  }

  // ERRORES
  let ulErrors = document.querySelector(".errores");

  // ulErrors.innerHTML = '';
  if (errors.length > 0) {
    ulErrors.innerHTML = "";
    for (let i = 0; i < errors.length; i++) {
      ulErrors.innerHTML += `<li > ${errors[i]} </li> `;
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa los campos!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
  } else {
    ulErrors.innerHTML = "";
    Swal.fire({
      icon: "success",
      title: "Te has registrado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });

    // NECESITAMOS DIRIGIR A LA API DE USERSconst fetchResponse = await fetch()
  }
});
//}
