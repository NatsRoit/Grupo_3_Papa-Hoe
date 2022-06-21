let express = require('express')

let mainController = require('../Controller/mainController.js')

let router = express.Router();

router.get('/boardBuilder',mainController.boardBuilder);

module.exports = router;