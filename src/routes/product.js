let express = require('express');
let router = express.Router();
const path = require('path');
const fs = require('fs');

let productController = require(path.join(__dirname, '../controllers/productController.js'));

router.get('/',productController.index);
router.get('/boardBuilder',productController.boardBuilder);
// router.get('/surfboards',productController.surfboards);
// router.get('/accesorios',productController.accesorios);
// router.get('/complementos',productController.complementos);
router.get('/cart',productController.cart);
router.get('/cart1',productController.cart1);
router.get('/cart2',productController.cart2);
router.get('/cart3',productController.cart3);
router.get('/detail/:id',productController.detail);

module.exports = router;