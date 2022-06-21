let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/productDetail',mainController.productDetail);

module.exports = router;