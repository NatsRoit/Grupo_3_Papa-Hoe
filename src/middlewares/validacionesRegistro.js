// EXPRESS-VALIDATOR
const path = require('path');
const fs = require('fs');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');



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
    body('email').isEmail().withMessage('Agregar un email válido'),
  
  //Aquí valido el Password   
    // body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
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