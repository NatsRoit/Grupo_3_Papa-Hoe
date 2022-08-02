const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require("multer");
const { body } = require('express-validator');

// MULTER CONFIG  ( https://www.npmjs.com/package/multer )
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/usuarios"));
  },
  filename: function (req, file, cb) {
    let nombreArchivo = 'user-' + Date.now() + path.extname(file.originalname)
    cb(null, nombreArchivo );
  },
});
const upload = multer({ storage });

// Acá tendremos que requerir varias cosas para el back-end del usuario:
// tipo los validadores para las contraseñas y el ejecutador de las validaciones.
// const bcrypt = require('bcryptjs');


// MIDDLEWARES
const acceso = require(path.resolve(__dirname, "../middlewares/acceso"));



let userController = require(path.join(__dirname, '../controllers/userController.js'));

//Aquí ejecuto mis validaciones
const validacionesLogin = [
  body('email').isEmail().withMessage('Agregar un email válido'),
  body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  body('email').custom( (value  ) =>{
    for (let i = 0; i < archivoUsuarios.length; i++) {
        if (archivoUsuarios[i].email == value) {
            return true    
        }
    }
    return false
  }).withMessage('Usuario no se encuentra registrado...'),

  //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
  body('password').custom( (value, {req}) =>{
      for (let i = 0; i < archivoUsuarios.length; i++) {
          if (archivoUsuarios[i].email == req.body.email) {
              if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
                return true;
              }else{
                return false;
              }
          }
      }
      
  }).withMessage('Usurio o contraseña no coinciden'),
]

//Aquí armo las validaciones del Registro
const validacionesRegistro = [
  //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
  body('nombre').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
    body('apellido').isLength({min: 1
      }).withMessage('El campo apellido no puede estar vacío'),
    body('email').isEmail().withMessage('Agregar un email válido'),

    //Aquí valido el Password   
    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),

    body('avatar').custom((value, {req}) =>{
        console.log(req.file);
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ]

// ADMIN
// router.get("/", acceso, adminController.index);

// LOGIN
router.get('/login',userController.login);
router.post('/login', validacionesLogin,userController.ingresar);

// REGISTER
router.get('/register',userController.register);
router.post('/register', upload.single('avatar'),validacionesRegistro, userController.create);

// LOGOUT (ruta que se activa cuando el usuario desea salir dela página)
router.get('/logout', userController.logout);

module.exports = router;