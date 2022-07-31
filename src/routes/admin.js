const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");


//Como podemos indicar para subir el archivo nombre y donde guardarlo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/img/"));
  },
  filename: function (req, file, cb) {
    let nombreArchivo = file.originalname + '-' + Date.now() + path.extname(file.originalname)
    cb(null, nombreArchivo );
  },
});

const upload = multer({ storage });













module.exports = router;
