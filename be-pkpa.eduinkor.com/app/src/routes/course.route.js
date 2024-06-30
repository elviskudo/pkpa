const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/course.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createData);
router.get('/', controller.getAllData);
// router.get('/user', [authJwt.isUser], controller.getData);
router.get('/superadmin', [authJwt.isSuperAdmin], controller.getDatasuperAdmin);
router.get('/list-predecessor', [authJwt.isSuperAdmin], controller.getListPredecessor);
// router.get('/mata-kuliah/:id', controller.getDataMatakuliah);
router.get('/package-detail/:id', [authJwt.isSuperAdmin], controller.getDataPackageDetail);
router.get('/:id', controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isUser], controller.deleteData);
router.get('/course-topic-menu/:id', [authJwt.isUser], controller.getDataBankTopic);

// Export the Router
module.exports = router;
