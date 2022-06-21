let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/register',mainController.register);

module.exports = router;