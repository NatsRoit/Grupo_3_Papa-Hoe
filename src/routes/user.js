const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const multer = require("multer");


//Aquí aperturo mi archivo de usuarios, ya que al registrarse un usuario es conveniente buscar que no exista una ya registrado con el mismo email o id o el campo que utlicen para identificar al usuario.
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')))


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
//const validacionesLogin = require(path.resolve(__dirname, "../middlewares/validacionesLogin"));
//const validacionesRegistro = require(path.resolve(__dirname, "../middlewares/validacionesRegistro"));
const adminLog = require(path.resolve(__dirname, "../middlewares/adminLog"));
const validaciones = require(path.resolve(__dirname, "../middlewares/validaciones"));

let userController = require(path.join(__dirname, '../controllers/userController.js'));

// USER PROFILE
router.get("/profile/:id", acceso, userController.profile);

//EDIT PROFILE
router.get('/edit/:id', acceso, userController.editView);
router.put('/edit/:id', upload.single('avatar'),  userController.edit);// validacionesRegistro, userController.edit);

// LOGIN
router.get('/login',userController.loginView);
router.post('/login', validaciones.validar('login'), adminLog, userController.login);//  userController.login);

// REGISTER
router.get('/register',userController.registerView);
router.post('/register', upload.single('avatar'), validaciones.validar('register'), userController.register);

// LOGOUT (ruta que se activa cuando el usuario desea salir dela página)
router.get('/logout', userController.logout);

module.exports = router;