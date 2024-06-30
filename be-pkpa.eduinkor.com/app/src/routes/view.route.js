const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/view.controller');

// Set The Express Router
const router = express.Router();

// router.post('/', [authJwt.isSuperAdmin], controller.createData);
router.get('/certificate/pkpa', controller.createCertificatePKPAPDF);
//router.get('/certificate/pkpa/:id', [authJwt.isSuperAdmin], controller.createCertificatePKPAPDFById);
router.get('/certificate/pkpa/:id', controller.createCertificatePKPAPDFById);
router.get('/certificate/course/:course_id', controller.createCertificateCoursePDF);
router.get('/', controller.viewTest);
// router.get('/certificate/course/download/:course_id', controller.downloadCertificateCourse);
// router.get('/:id', controller.getDataById);
// router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
// router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
