const express = require('express');
const controller = require('../controllers/district.controller');

// Set The Express Router
const router = express.Router();

router.get('/:id', controller.getDistrictById);

module.exports = router;
