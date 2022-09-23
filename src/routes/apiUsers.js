const express = require('express');
const router = express.Router();
const usersApiController = require('../controllers/usersApiController');


// API RUTA COMPLETA>  /api/users
router.get('/list', usersApiController.list)
router.get('/detail/:id', usersApiController.detail)
router.post('/create', usersApiController.create)
router.get('/delete/:id', usersApiController.destroy)

module.exports = router;