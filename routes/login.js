let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/login',mainController.login);

module.exports = router;