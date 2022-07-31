const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require("multer");

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

// ADMIN
// router.get("/", acceso, adminController.index);

// LOGIN
router.get('/login',userController.login);
//router.post('/login',userController.ingresar);

// REGISTER
router.get('/register',userController.register);
router.post('/register',userController.create);

// LOGOUT (ruta que se activa cuando el usuario desea salir dela página)
//router.get('/logout', userController.logout);

module.exports = router;