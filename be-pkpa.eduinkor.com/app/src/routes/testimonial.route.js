const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/testimonial.controller');
// const upload = require('../utils/upload/file_upload');
// Set The Express Router
const router = express.Router();
router.post('/', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.createTestimonial);
router.put('/', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.UpdateTestimonial);
router.get('/', controller.getDataAll);
router.get('/user-testimonial', controller.getDataTestimonial);
router.get('/user', controller.getDataUserTesti);
router.get('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getDatabyId);
module.exports = router;
