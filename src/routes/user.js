let express = require('express');
let router = express.Router();
const path = require('path');
const fs = require('fs');
//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
// const multer = require('multer');

// Acá tendremos que requerir varias cosas para el back-end del usuario:
// tipo los validadores para las contraseñas. y el ejecutador de las validaciones.

//Aquí tendremos que disponer la información del storage para tratamiento de guardado imagenes
//https://www.npmjs.com/package/multer



let userController = require(path.join(__dirname, '../controllers/userController.js'));

router.get('/login',userController.login);
// router.post('/login',userController.ingresar);

router.get('/register',userController.register);
// router.post('/register',userController.create);

//ACÁ DEBERIAMOS AGREGAR:  ruta que se activa al momento que el usuario desea salir dela página
// router.get('/logout', userController.logout);

module.exports = router;