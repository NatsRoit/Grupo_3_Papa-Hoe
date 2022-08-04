// EXPRESS-VALIDATOR
const path = require('path');
const fs = require('fs');
const { body } = require('express-validator');
// const bcrypt = require('bcryptjs');



let archivoUsers =  fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json'), {encoding: 'utf-8'});
let users;
  if (archivoUsers == "") {
    users = [];
  } else {
    users = JSON.parse(archivoUsers);
  };

// VALIDACIONES REGISTRO
// let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')))

const validacionesRegistro = [
    body('nombre').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),
    body('apellido').isLength({min: 1}).withMessage('El campo apellido no puede estar vacío'),
    body('email').isEmail().withMessage('Controlá tu email'),
    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),

    //Aquí valido la confimación del password dispuesto por el usuario
    body('confirm_password').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),

    //Aquí valido si las contraseñas son iguales o no
    //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
    //El valor { req } corresponde a lo que viene desde el formulario

    body('confirm_password').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales'),


    body('avatar').custom((value, {req}) =>{
          // console.log(req.file);
          if(req.file != undefined){
              return true
          } else {
            req.file = { 
              filename : 'default-admin.jpg'
            }
            return true
          }
      })
    //.withMessage('Debes elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
    ];

    module.exports = validacionesRegistro