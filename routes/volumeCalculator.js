let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/volumeCalculator',mainController.volumeCalculator);

module.exports = router;