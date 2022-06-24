let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/productCart',mainController.productCart);

module.exports = router;