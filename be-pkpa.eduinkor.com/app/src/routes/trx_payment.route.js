const express = require('express');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/trx_payment.controller');

// Set The Express Router
const router = express.Router();

router.get('/', controller.getDataByUser);
router.get('/:trx_id', controller.getDataById);

module.exports = router;
