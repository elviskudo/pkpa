const express = require('express');
const { authJwt } = require('../middleware');
const upload = require('../utils/upload/file_upload');

const controller = require('../controllers/bank_course.controller');

// Set The Express Router
const router = express.Router();

router.post('/', upload('course').fields([{
  name: 'background_image', maxCount: 1,
}, { name: 'certificate', maxCount: 1 }]), [authJwt.isSuperAdmin], controller.createData);
router.get('/', controller.getAllData);
router.get('/:id', controller.getDataById);
router.put('/:id', upload('course').fields([{
  name: 'background_image', maxCount: 1,
}, { name: 'certificate', maxCount: 1 }]), [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
