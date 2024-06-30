const express = require('express');
const controller = require('../controllers/forgot_password.controller');

const router = express.Router();

router.post('/', controller.forgotPassword);
router.put('/', controller.updateForgotPassword);

module.exports = router;
