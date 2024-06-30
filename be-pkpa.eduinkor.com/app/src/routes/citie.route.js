const express = require('express');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/citie.controller');

// Set The Express Router
const router = express.Router();

router.get('/:id', controller.getCitieById);

module.exports = router;
