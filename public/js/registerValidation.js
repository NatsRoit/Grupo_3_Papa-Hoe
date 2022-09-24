window.onload = function(){

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
    let imagen = document.querySelector('#avatar')
  
    //VALIDACION NOMBRE
    nombre.valid = false;
    nombre.addEventListener("focus", function () {
      nombre.classList.remove("invalid-input");
      nombre.classList.remove("valid-input");
    })

    nombre.addEventListener("blur", function () {
      if (nombre.value == "") {
        nombre.previousElementSibling.innerHTML = "No te olvides de poner tu nombre!";
        nombre.classList.add("invalid-input");
      } else if (nombre.value.length < 3) {
        nombre.previousElementSibling.innerHTML = "El nombre debe tener mas de 3 caracteres";
        nombre.classList.remove("valid-input");
        nombre.classList.add("invalid-input");
      } else {
        nombre.previousElementSibling.innerHTML = "";
        nombre.classList.remove("invalid-input");
        nombre.classList.add("valid-input");
        namePreview.innerHTML = "<h2>" + nombre.value + "</h2>"
        nombre.valid = true;
      }
    });


    //VALIDACION APELLIDO
    apellido.valid = false;
    apellido.addEventListener("focus", function () {
      apellido.classList.remove("invalid-input");
      apellido.classList.remove("valid-input");
      
    })

    apellido.addEventListener("blur", function () {
      if (apellido.value == "") {
        apellido.previousElementSibling.innerHTML = "No te olvides de indicar tu apellido!";
        apellido.classList.add("invalid-input");
      } else if (apellido.value.length < 3) {
        apellido.previousElementSibling.innerHTML = "El apellido debe tener mas de 3 caracteres";
        apellido.classList.remove("valid-input");
        apellido.classList.add("invalid-input");
      } else {
        apellido.previousElementSibling.innerHTML = "";
        apellido.classList.remove("invalid-input");
        apellido.classList.add("valid-input");
        namePreview.innerHTML = "<h2>" + apellido.value + "</h2>"
        apellido.valid = true;
      }
    });
  
    //VALIDACION USUARIO
    apellido.valid = false;
    apellido.addEventListener("focus", function () {
      apellido.classList.remove("invalid-input");
      apellido.classList.remove("valid-input");
      
    })

    usuario.addEventListener("blur", function () {
      if (usuario.value == "") {
        usuario.previousElementSibling.innerHTML = "No te olvides de un nombre de usuario!";
        usuario.classList.add("invalid-input");
      } else if (usuario.value.length < 3) {
        usuario.previousElementSibling.innerHTML = "El usuario debe tener mas de 3 caracteres";
        usuario.classList.remove("valid-input");
        usuario.classList.add("invalid-input");
      } else {
        usuario.previousElementSibling.innerHTML = "";
        usuario.classList.remove("invalid-input");
        usuario.classList.add("valid-input");
        namePreview.innerHTML = "<h2>" + usuario.value + "</h2>"
        usuario.valid = true;
      }
    });
  
    //VALIDACION EMAIL
    email.valid = false;
    email.addEventListener("focus", function () {
      email.classList.remove("invalid-input");
      email.classList.remove("valid-input");     
    })

    email.addEventListener("blur", function () {
      if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        email.previousElementSibling.innerHTML = "No te olvides de indicar tu email!";
        email.classList.add("invalid-input");
      } else if (email.value.length < 3) {
        email.previousElementSibling.innerHTML = "Debes indicar un email valido";
        email.classList.remove("valid-input");
        email.classList.add("invalid-input");
      } else {
        email.previousElementSibling.innerHTML = "";
        email.classList.remove("invalid-input");
        email.classList.add("valid-input");
        namePreview.innerHTML = "<h2>" + email.value + "</h2>"
        email.valid = true;
      }
    });
  
    //VALIDACION PASSWORD
    password.valid = false;
    password.addEventListener("focus", function () {
      password.classList.remove("invalid-input");
      password.classList.remove("valid-input");     
    })

    password.addEventListener("blur", function () {
      if (password.value == "") {
        password.previousElementSibling.innerHTML = "No te olvides de indicar tu password!";
        password.classList.add("invalid-input");
      } else if (password.value.length < 8) {
        password.previousElementSibling.innerHTML = "Tu password debe tener como minimo 8 caracteres";
        password.classList.remove("valid-input");
        password.classList.add("invalid-input");
      } else {
        password.previousElementSibling.innerHTML = "";
        password.classList.remove("invalid-input");
        password.classList.add("valid-input");
        namePreview.innerHTML = "<h2>" + password.value + "</h2>"
        password.valid = true;
      }
    });


    //VALIDACION CONFIRMPASSWORD
    confirmPassword.value.valid = false;
    confirmPassword.value.addEventListener("focus", function () {
      confirmPassword.value.classList.remove("invalid-input");
      confirmPassword.value.classList.remove("valid-input");     
    })
    confirmPassword.addEventListener("blur", function () {
      if (confirmPassword.value == "") {
        confirmPassword.previousElementSibling.innerHTML = "No te olvides deconfirmar tu contrasena!";
        confirmPassword.classList.add("invalid-input");
      } else if (password.value != confirmPassword.value) {
        confirmPassword.previousElementSibling.innerHTML = "Las contrasenas deben coincidir";
        confirmPassword.classList.remove("valid-input");
        confirmPassword.classList.add("invalid-input");
      } else {
        confirmPassword.previousElementSibling.innerHTML = "";
        confirmPassword.classList.remove("invalid-input");
        confirmPassword.classList.add("valid-input");
        namePreview.innerHTML = "<h2>" + confirmPassword.value + "</h2>"
        confirmPassword.valid = true;
      }
    });
   
    //VALIDACION PROVINCE
    if (province.value == "") {
      errors.push("El campo Provincia no puede estar vacío");
      province.classList.add("invalid-input");
    } else {
      province.classList.add("form-input");
      province.classList.remove("invalid-input");
    }
  
    //VALIDACION COUNTRY
    if (country.value == "") {
      errors.push("El campo País no puede estar vacío");
      country.classList.add("invalid-input");
    } else {
      country.classList.add("form-input");
      country.classList.remove("invalid-input");
    }
  
    //VALIDACION DIRECCION
    if (direccion.value == "") {
      errors.push("El campo Dirección no puede estar vacío");
      direccion.classList.add("invalid-input");
    } else {
      direccion.classList.add("form-input");
      direccion.classList.remove("invalid-input");
    }
  
    //VALIDACION LOCALIDAD
    if (localidad.value == "") {
      errors.push("El campo localidad no puede estar vacío");
      localidad.classList.add("invalid-input");
    } else {
      localidad.classList.add("form-input");
      localidad.classList.remove("invalid-input");
    }
  
    //VALIDACION CP
    if (codigoPostal.value == "") {
      errors.push("El campo Código Postal no puede estar vacío");
      codigoPostal.classList.add("invalid-input");
    } else {
      codigoPostal.classList.add("form-input");
      codigoPostal.classList.remove("invalid-input");
    }
  
    //VALIDACION TELEFONO
    if (telefono.value == "") {
      errors.push("El campo Teléfono no puede estar vacío");
      telefono.classList.add("invalid-input");
    } else {
      telefono.classList.add("form-input");
      telefono.classList.remove("invalid-input");
    }
  
    //VALIDACION IMAGEN
    
      var allowedExtensions = /(.jpg|.jpeg|.png|.gif|.svg|.tiff|.webp)$/i;    
      if(!allowedExtensions.exec(imagen.value) ){        
          errors.push('Las extensiones permitidas son .jpeg/.jpg/.png/.gif/.svg/.tiff/.webp y no puede superar 1MB');      
          imagen.classList.add("invalid-input");
      }
      
      else{
        imagen.classList.add("form-input");
        imagen.classList.remove("invalid-input");
      }
  
    
     
    // ERRORES
    let ulErrors = document.querySelector(".errores");
  
    // ulErrors.innerHTML = '';
    if (errors.length > 0) {
      //e.preventDefault();
  
      ulErrors.innerHTML = "";
      for (let i = 0; i < errors.length; i++) {
        ulErrors.innerHTML += `<li > ${errors[i]} </li> `;
      }
      Swal.fire({
          icon: 'error',
          title: 'No surfeaste la ola!',
          text: 'Revisa los campos!',
         // footer: '<a href="">Why do I have this issue?</a>'
        })
    } else {
      ulErrors.innerHTML = "";
      Swal.fire({
        icon: "success",
        title: "Te has registrado correctamente",
        showConfirmButton: false,
        timer: 1000,
        
      });
  
      formulario.submit();
      // NECESITAMOS DIRIGIR A LA API DE USERSconst fetchResponse = await fetch()
    }
  });
  }