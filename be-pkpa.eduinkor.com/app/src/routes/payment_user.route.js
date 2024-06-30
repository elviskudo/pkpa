const express = require('express');
const { body } = require('express-validator');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/payment_user.controller');
const { validate } = require('../middleware/validate');

// Set The Express Router
const router = express.Router();

router.post('/va', validate(
  [
    body('bank_id')
      .not().isEmpty()
      .withMessage('Bank id tidak boleh kosong')
      .isInt()
      .withMessage('Bank id harus angka'),
    body('phase_university_id')
      .not().isEmpty()
      .withMessage('Phase university id tidak boleh kosong')
      .isInt()
      .withMessage('Phase university id harus angka'),
  ],
), controller.createVAByUser);
router.post('/ewallet', validate(
  [
    body('bank_id')
      .not().isEmpty()
      .withMessage('Bank id tidak boleh kosong')
      .isInt()
      .withMessage('Bank id harus angka'),
    body('phase_university_id')
      .not().isEmpty()
      .withMessage('Phase university id tidak boleh kosong')
      .isInt()
      .withMessage('Phase university id harus angka'),
  ],
), controller.createEWalletByUser);
router.post('/card', controller.createCCByUser);

module.exports = router;
