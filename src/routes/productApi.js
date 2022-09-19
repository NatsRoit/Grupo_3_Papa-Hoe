const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productApiController');

router.get('/list', controlador.list);
router.get('/detail/:id', controlador.detail )
router.get('/search', controlador.search);


module.exports = router;