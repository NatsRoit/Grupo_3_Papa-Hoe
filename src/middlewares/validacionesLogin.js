// EXPRESS-VALIDATOR
const path = require('path');
const fs = require('fs');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


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
  body('email').custom( async (value) => {   
      await db.User.findOne({ where: {email: value }}).then(user => {
            if (!user)
            throw new Error('¿Estás seguro de haber usado ese email para registrarte?');
      });
  }),

  //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
  body('password').custom( async (value, {req,next}) => { 
       await db.User.findOne({ where: {email: req.body.email }}).then(user => {
             if (!bcrypt.compareSync(value, user.password)) 
             throw new Error('Contraseña inválida. Hacé memoria!')
       });
  })
];

module.exports = validacionesLogin