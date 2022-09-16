window.addEventListener("load", function () {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let oops = document.querySelector(".auth-error-message");

    // email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    let emailReg = /^(\w|\.|-)+?@(\w|-)+?\.\w{2,4}($|\.\w{2,4})$/gim;
    // let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([^ ]){6,12}$/; // 6 a 12: digitos y números y al menos un caracter especial
    let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)([^ ]){6,12}$/; // 6 a 12 caracteres: Al menos 1 MAY o 1 min, y 1 número

    let form = document.querySelector("form");
    form.email.focus();

// VALIDACIÓN EMAIL
email.valid = false;
email.addEventListener("focus", function () {
    email.classList.remove("invalid-input");
    email.classList.remove("valid-input");
});

email.addEventListener("blur", function () {
let errMsg = this.parentElement.querySelector("#errMsg");
    console.log(email.value.match(emailReg))
    if (email.value == "") {
        errMsg.innerHTML = "Olvidaste tu email";
        email.classList.add("invalid-input");
    } else if (!email.value.match(emailReg)) {
        errMsg.innerHTML = "Parece que ese email no es válido";
        email.classList.remove("valid-input");
        email.classList.add("invalid-input");
    } else {
        errMsg.innerHTML = "";
        email.classList.remove("invalid-input");
        email.classList.add("valid-input");
        email.valid = true;
    }
});

// VALIDACIÓN PASSWORD
password.valid = false;
password.addEventListener("focus", function () {
    password.classList.remove("invalid-input");
    password.classList.remove("valid-input");
});

password.addEventListener("blur", function () {
let errMsg = this.parentElement.querySelector("#errMsg");
    console.log(password.value.match(emailReg))
    if (password.value == "") {
        errMsg.innerHTML = "Tenés que proporcionar una constraseña";
        password.classList.add("invalid-input");
    } else if (!password.value.match(passwordReg)) {
        errMsg.innerHTML = "Parece que esa contraseña no es válida";
        password.classList.remove("valid-input");
        password.classList.add("invalid-input");
    } else {
        errMsg.innerHTML = "";
        password.classList.remove("invalid-input");
        password.classList.add("valid-input");
        password.valid = true;
    }
});

  // const campos = {
  //     email: false,
  //     password: false
  // };

  // const validarFormulario = function (e) {
  //     switch (e.target.name) {
  //         case "email":
  //             if(expresiones.email.test(e.target.value)) {
  //                 email.classList.remove("form-input-incorrecto");
  //                 email.classList.add("form-input-correcto");
  //                 document.querySelector("i.form-validacion-estado").classList.add("fa-circle-check");
  //                 document.querySelector("i.form-validacion-estado").classList.remove("fa-circle-xmark");
  //                 document.querySelector("#form-input-email .error-input").classList.remove("error-input-activo");
  //                 campos[email] = true;
  //             } else {
  //                 email.classList.add("form-input-incorrecto");
  //                 email.classList.remove("form-input-correcto");
  //                 document.querySelector("i.form-validacion-estado").classList.add("fa-circle-xmark");
  //                 document.querySelector("i.form-validacion-estado").classList.remove("fa-circle-check");
  //                 document.querySelector("#form-input-email .error-input").classList.add("error-input-activo");
  //                 campos [email] = false;
  //             }
  //         break;
  //         case "password":
  //             if(expresiones.password.test(e.target.value)) {
  //                 password.classList.remove("form-input-incorrecto");
  //                 password.classList.add("form-input-correcto");
  //                 document.querySelector("#form-input-password i").classList.add("fa-circle-check");
  //                 document.querySelector("#form-input-password i").classList.remove("fa-circle-xmark");
  //                 document.querySelector("#form-input-password .error-input").classList.remove("error-input-activo");
  //             } else {
  //                 password.classList.add("form-input-incorrecto");
  //                 password.classList.remove("form-input-correcto");
  //                 document.querySelector("#form-input-password i").classList.add("fa-circle-xmark");
  //                 document.querySelector("#form-input-password i").classList.remove("fa-circle-check");
  //                 document.querySelector("#form-input-password .error-input").classList.add("error-input-activo");
  //             }
  //         break;
  //     }
  // };

//   inputs.forEach(function (input) {
//     input.addEventListener("keyup", validarFormulario);
//     input.addEventListener("blur", validarFormulario);
//     console.log();
//   });

//   formulario.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (campos.email && campos.password) {
//       formulario.submit();
//     }
//   });

  /*    
    let errores = [];
    
    // Validación mail
    if (email.value == "") {
        errores.push("Necesitamos que completes tu Email");
        email.classList.add('is-invalid');
    }
    else if (email.value = "/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i") {
        alert("No completaste una dirección de Email válida");
    } 
*/
});
