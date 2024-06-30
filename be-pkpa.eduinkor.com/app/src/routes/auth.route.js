const express = require('express');
const { body } = require('express-validator');
const { validate } = require('../middleware/validate');
// const multer = require('multer');

// const upload = multer();
const upload = require('../utils/upload/file_upload');
const controller = require('../controllers/auth.controller');

// Set The Express Router
const router = express.Router();

router.post('/register',
  // uploadJpg('user-registration').fields([{
  //   name: 'foto', maxCount: 1,
  // }]),
  upload('user-registration').fields([{
    name: 'cv', maxCount: 1,
  }, {
    name: 'foto', maxCount: 1,
  }, {
    name: 'ktp', maxCount: 1,
  }, {
    name: 'ijazah', maxCount: 1,
  }, {
    name: 'sertifikat_akreditasi', maxCount: 1,
  }]), controller.register);
router.post('/login',
  validate(
    [
      body('email')
        .not().isEmpty()
        .withMessage('Email tidak boleh kosong')
        .isEmail()
        .withMessage('Email tidak valid'),
      body('password', 'Password min 6').isLength({ min: 6 }),
    ],
  ), controller.login);

// router.get('/emailVerify/:email', controller.emailVerify);

// Export the Router
module.exports = router;
