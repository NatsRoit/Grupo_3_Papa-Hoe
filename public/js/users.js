window.addEventListener ("load", function () {

    var formulario = document.querySelector ("form");
    var email = document.querySelector ("#email"); 
    var password = document.getElementById ("password"); 

    email.addEventListener ("focus", function () {
        email.style.border = "#335cb1 solid 0.5px"
    });

    email.addEventListener ("blur", function () {
        email.style.border = "#b3b1b3 solid 0.5px"
    });

    password.addEventListener ("focus", function () {
        password.style.border = "#335cb1 solid 0.5px"
    });

    password.addEventListener ("blur", function () {
        password.style.border = "#b3b1b3 solid 0.5px"
    });

    formulario.addEventListener ("submit", function (e) {

        let errores = [];

        // Validación mail
     /*   if (email.value == "") {
            errores.push("Necesitamos que completes tu Email");
            email.classList.add('is-invalid');
        } 
        else if (email.value = "/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i") {
            errores.push("No completaste una dirección de Email válida");
        } */

        /*email.addEventListener("input", function (event) {
            if (email.validity.typeMismatch) {
              email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
            } else {
              email.setCustomValidity("");
            }
          });*/

     /*   else {
            email.classList.remove('is-invalid');
        };

        // Validación password
        if (password.value == "") {
            errores.push("El campo Password no puede estar vacío");
            email.classList.add('is-invalid');
        }  
        else {
            email.classList.remove('is-invalid');
        }*/


        /*(password.value.length = 8) {
            errores.push("Por favor revisá lo ingresado, tu clave no puede tener mas de 8 carácters");
        }; */

      /*  let ulErrores = document.querySelector ("div.auth-error-message");
        ulErrores.innerHTML = "";

        if (errores.length > 0) {
        e.preventDefault ();

            for (i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li> $ {errores [i]} </li>"
            };

        }*/
      


    });
});


