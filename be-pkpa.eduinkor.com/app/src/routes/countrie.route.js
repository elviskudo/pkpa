const express = require('express');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/countrie.controller');

// Set The Express Router
const router = express.Router();

router.get('/', controller.getCountrieById);

module.exports = router;
