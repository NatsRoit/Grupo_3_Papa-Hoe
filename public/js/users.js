window.addEventListener ("load", function () { 

    const formulario = document.querySelector ("form");
    const inputs = document.querySelectorAll ("#formulario input")
    const email = document.querySelector ("#email"); 
    const password = document.getElementById ("password"); 
    const oops = this.document.querySelector(".auth-error-message")
    const expresiones = {
        email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([^ ]){6,12}$/ ,  // 6 a 12 digitos y números y un caracter especial
    };
    
    
    formulario.email.focus ();
    
    email.addEventListener ("focus", function () {
        email.style.border = "#335cb1 solid 2.5px"
    });
    
    email.addEventListener ("blur", function () {
        email.style.border = "#b3b1b3 solid 0.5px"
    });
    
    password.addEventListener ("focus", function () {
        password.style.border = "#335cb1 solid 2.5px"
    });
    
    password.addEventListener ("blur", function () {
        password.style.border = "#b3b1b3 solid 0.5px"
    });

    const campos = {
        email: false,
        password: false
    };

    const validarFormulario = function (e) {
        switch (e.target.name) {
            case "email": 
                if(expresiones.email.test(e.target.value)) {
                    email.classList.remove("form-input-incorrecto");
                    email.classList.add("form-input-correcto");
                    document.querySelector("i.form-validacion-estado").classList.add("fa-circle-check");
                    document.querySelector("i.form-validacion-estado").classList.remove("fa-circle-xmark");
                    document.querySelector("#form-input-email .error-input").classList.remove("error-input-activo");
                    campos[email] = true;
                } else {
                    email.classList.add("form-input-incorrecto");
                    email.classList.remove("form-input-correcto");
                    document.querySelector("i.form-validacion-estado").classList.add("fa-circle-xmark");
                    document.querySelector("i.form-validacion-estado").classList.remove("fa-circle-check");
                    document.querySelector("#form-input-email .error-input").classList.add("error-input-activo");
                    campos [email] = false;
                }
            break;
            case "password": 
                if(expresiones.password.test(e.target.value)) {
                    password.classList.remove("form-input-incorrecto");
                    password.classList.add("form-input-correcto");
                    document.querySelector("#form-input-password i").classList.add("fa-circle-check");
                    document.querySelector("#form-input-password i").classList.remove("fa-circle-xmark");
                    document.querySelector("#form-input-password .error-input").classList.remove("error-input-activo");
                } else {
                    password.classList.add("form-input-incorrecto");
                    password.classList.remove("form-input-correcto");
                    document.querySelector("#form-input-password i").classList.add("fa-circle-xmark");
                    document.querySelector("#form-input-password i").classList.remove("fa-circle-check");
                    document.querySelector("#form-input-password .error-input").classList.add("error-input-activo");
                }
            break;
        }
    }; 

    
    inputs.forEach (function(input) {
        input.addEventListener("keyup", validarFormulario)
        input.addEventListener("blur", validarFormulario)
        console.log()

    })

    formulario.addEventListener ("submit", function (e) {
        e.preventDefault ();
        if (campos.email && campos.password) {
            formulario.submit()
        };
    })

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
    
    else {
        email.classList.remove('is-invalid');
    };
    
    // Validación password
    if (password.value == "") {
        errores.push("El campo Password no puede estar vacío");
        email.classList.add('is-invalid');
    }  
    else {
        email.classList.remove('is-invalid');
    }
    
    

    
    
    
    
        /*(password.value.length = 8) {
            errores.push("Por favor revisá lo ingresado, tu clave no puede tener mas de 6 carácters");
        }; */
    
    /*
        let ulErrores = document.querySelector ("div.auth-error-message");
        ulErrores.innerHTML = "";
    
        if (errores.length > 0) {
    
            for (i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li> $ {errores [i]} </li>"
            };
    
        }
      
    
    
    }); */
    }); 

