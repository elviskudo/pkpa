const express = require('express');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/state.controller');

// Set The Express Router
const router = express.Router();

router.get('/', controller.getStateAll);
router.get('/:id', controller.getStateById);

module.exports = router;
