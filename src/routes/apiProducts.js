const express = require('express');
const router = express.Router();
const apiProductsController = require('../controllers/apiProductsController');

router.get('/list', apiProductsController.list);
router.get('/detail/:id', apiProductsController.detail )
router.get('/search', apiProductsController.search);
router.get('/categories', apiProductsController.categories);

module.exports = router;