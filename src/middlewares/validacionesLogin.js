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



// VALIDACIONES LOGIN
const validacionesLogin = [
  body('email').isEmail().withMessage('Agregar un email válido'),
  body('email').custom( (value) =>{
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == value) {
        return true    
      }
    }
    return false
  }).withMessage('¿Estás seguro de haber usado ese email para registrarte?'),
  
  //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
  body('password').custom( (value, {req}) => {
      for (let i = 0; i < users.length; i++) {
          if (users[i].email == req.body.email) {
              if(bcrypt.compareSync(value, users[i].password)){
                return true;
              }else{
                return false;
              }
          }
      }
  }).withMessage('Contraseña inválida. Hacé memoria!'),
];

module.exports = validacionesLogin