let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/shop',mainController.shop);

module.exports = router;