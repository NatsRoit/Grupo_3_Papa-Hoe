let express = require('express');
let router = express.Router();
const path = require('path');

// Acá requeriremos el controller correspondiente a las rutas de admin
let adminController = require(path.join(__dirname, '../controllers/adminController.js'));


// Acá escribiremos las rutas para las tareas de Administrador
// POR EJEMPLO:  router.get('/admin', controllersAdmin.create);

module.exports = router;