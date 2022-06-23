let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/about',mainController.about);

module.exports = router;