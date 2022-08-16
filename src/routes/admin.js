const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");


// MULTER CONFIG
const multerDiskstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb (null, path.resolve(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    let nombreArchivo = Date.now() + '-' + file.originalname;
    cb(null, nombreArchivo );
  },
});
const upload = multer({ storage : multerDiskstorage });


// MIDDLEWARES
//verifica si el usuario está logueado, sino redirige a login
const logueado = require(path.resolve(__dirname, "../middlewares/logueado"));


let adminController = require(path.join(__dirname, '../controllers/adminController.js'));


// CREATE NUEVO PRODUCTO
router.get("/create",logueado, adminController.create);
router.post("/create", upload.single("imagen"), adminController.processCreate);

// UPDATE PRODUCTOS
router.get("/edit/:id", logueado, adminController.edit);
router.put("/edit/:id", upload.single("imagen"), adminController.processEdit);

// DELETE PRODUCTOS
router.get("/delete/:id", adminController.destroy);













module.exports = router;
