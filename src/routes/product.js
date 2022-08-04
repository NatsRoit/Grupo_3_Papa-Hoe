const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");

// MULTER CONFIG
const multerDiskstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // let accesorios;
    // let surfboards;
    // let complementos;
    cb (null, path.resolve(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    let nombreArchivo = Date.now() + '-' + file.originalname;
    cb(null, nombreArchivo );
  },
});
const upload = multer({ storage : multerDiskstorage });


// MIDDLEWARES ???
//verifica si el usuario está logueado, sino redirige a login
const logueado = require(path.resolve(__dirname, "../middlewares/logueado"));
// ---------------------------


let productController = require(path.join(__dirname, '../controllers/productController.js'));

// READ PRODUCTOS
router.get('/',productController.indexAll);
router.get('/detail/:id',productController.detail);
// router.get('/accesorios',productController.accesorios);
// router.get('/complementos',productController.complementos);

// CREATE NUEVO PRODUCTO
router.get("/create",logueado, productController.create);
router.post("/create", upload.single("imagen"), productController.processCreate);

// UPDATE PRODUCTOS
router.get("/edit/:id", logueado, productController.edit);
router.put("/edit/:id", upload.single("imagen"), productController.processEdit);



// DELETE PRODUCTOS
router.get("/delete/:id", productController.destroy);

// BOARDBUILDER
router.get('/boardBuilder',productController.boardBuilder);

// CHECKOUT
router.get('/cart',productController.cart);
router.get('/cart1',productController.cart1);
router.get('/cart2',productController.cart2);
router.get('/cart3',productController.cart3);

module.exports = router;