const express = require('express');
const router = express.Router();
const path = require('path');

let mainController = require(path.join(__dirname, '../controllers/mainController.js'));

router.get('/',mainController.index);
router.get('/about',mainController.about);
router.get('/devoluciones',mainController.devoluciones);
router.get('/faqs',mainController.faqs);
router.get('/politica-cancelacion',mainController.politicaCancelacion);
router.get('/contact',mainController.contact);
router.post('/contact',mainController.contactSent);
router.get('/tracker',mainController.tracker);
router.get('/volumeCalculator',mainController.volumeCalculator);

module.exports = router;