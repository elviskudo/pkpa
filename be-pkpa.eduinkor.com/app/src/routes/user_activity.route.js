const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/user_activity.controller');

// Set The Express Router
const router = express.Router();
// router.get('/user', controller.getDataByParams);
// router.post('/', controller.createData);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/data-certificate', [authJwt.isSuperAdmin], controller.getCertificatePKPAByAdmin);
router.get('/user', [authJwt.isUser], controller.getCertificatePKPAByUser);
router.get('/:id', [authJwt.isSuperAdmin], controller.getAllById);
// router.get('/:id', controller.getCountNotificationById);
// router.put('/:id', controller.updateData);
// router.delete('/:id', controller.deleteData);

// Export the Router
module.exports = router;
