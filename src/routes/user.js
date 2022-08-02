const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const multer = require("multer");
// Acá tendremos que requerir varias cosas para el back-end del usuario:
// tipo los validadores para las contraseñas y el ejecutador de las validaciones.
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');


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



// MIDDLEWARES
const acceso = require(path.resolve(__dirname, "../middlewares/acceso"));

// EXPRESS-VALIDATOR
// VALIDACIONES LOGIN
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')))

<<<<<<< HEAD

let userController = require(path.join(__dirname, '../controllers/userController.js'));

//Aquí ejecuto mis validaciones
=======
>>>>>>> a20229b328ee98bd265b516934890aec04d29021
const validacionesLogin = [
  body('email').isEmail().withMessage('Agregar un email válido'),
  // body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  body('email').custom( (value) =>{
    for (let i = 0; i < archivoUsuarios.length; i++) {
        if (archivoUsuarios[i].email == value) {
            return true    
        }
    }
    return false
  }).withMessage('¿Estás seguro de haber usado ese email para registrarte?'),

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
      
  }).withMessage('Contraseña inválida. Hacé memoria!'),
];

// VALIDACIONES REGISTRO (otras validaciones)
const validacionesRegistro = [
  body('nombre').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),
  body('apellido').isLength({min: 1}).withMessage('El campo apellido no puede estar vacío'),
  body('email').isEmail().withMessage('Agregar un email válido'),

//Aquí valido el Password   
  body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  body('avatar').custom((value, {req}) =>{
        // console.log(req.file);
        if(req.file != undefined){
            return true
        } else {
          req.file = { 
            filename : 'default-admin.jpg'
          }
          console.log(req.file)
        }
          return true
          // return false;
    }).withMessage('Debes elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ];




let userController = require(path.join(__dirname, '../controllers/userController.js'));

// USER PROFILE
router.get("/profile/:id", acceso, userController.profile);

// LOGIN
router.get('/login',userController.loginView);
router.post('/login', validacionesLogin, userController.login);

// REGISTER
router.get('/register',userController.registerView);
router.post('/register', upload.single('avatar'), validacionesRegistro, userController.register);

// LOGOUT (ruta que se activa cuando el usuario desea salir dela página)
router.get('/logout', userController.logout);

module.exports = router;