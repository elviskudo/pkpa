const express = require('express');
// const multer = require('multer');
const { authJwt } = require('../middleware');
const upload = require('../utils/upload/file_upload');
const controller = require('../controllers/university.controller');

// Set The Express Router
const router = express.Router();

router.post('/', upload('universities').fields([{
  name: 'image_university', maxCount: 1,
}, {
  name: 'logo_university', maxCount: 1,
}]), [authJwt.verifyToken, authJwt.isSuperAdmin], controller.createUniversity);
router.get('/', controller.getAllUniversity);
router.get('/setting', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getDataSettingUniv);
router.put('/updateUniv', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.updateOrderUniv);
// router.get('/:slug', controller.getUversityBySlug);
router.get('/:id', controller.getUversityById);
// router.get('/newest', [authJwt.isSuperAdmin], controller.getBookLessThan2Years);
// router.get('/all', [authJwt.isSuperAdmin], controller.getAllUser);

// router.get('/:id', [authJwt.isSuperAdmin], controller.getBookById);
router.put('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], upload('universities').fields([{
  name: 'image_university', maxCount: 1,
}, {
  name: 'logo_university', maxCount: 1,
}, { name: 'certificate', maxCount: 1 },
]), controller.updateUniversity);
// router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteUser);

// Export the Router
module.exports = router;
