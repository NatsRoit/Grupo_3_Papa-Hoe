const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Acá requeriremos el controller correspondiente a las rutas de admin
let adminController = require(path.join(__dirname, '../controllers/adminController.js'));



//Requerir el middleware Ruta Acceso
const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
      cb(null, 'tabla-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })


// Acá escribiremos las rutas para las tareas de Administrador
// POR EJEMPLO:  router.get('/admin', adminController.create);  

router.get('/admin', acceso, adminController.index);
router.get('/admin/create', adminController.create);
router.post('/admin/create', upload.single('imagen'), adminController.save);
router.get('/admin/detail/:id', adminController.show);
router.get('/admin/edit/:id', adminController.edit);
router.put('/admin/edit/:id', upload.single('imagen'), adminController.update);
router.get('/admin/delete/:id', adminController.destroy);

module.exports = router;

