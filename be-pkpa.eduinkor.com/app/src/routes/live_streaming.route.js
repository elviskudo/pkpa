const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/live_streaming.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createData);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/user', [authJwt.isUser], controller.getAllDataByUser);
router.get('/course', [authJwt.isUser], controller.getDataOnlineSession);
router.get('/user/:id', [authJwt.isUser], controller.getDataByUserById);
router.get('/:id', [authJwt.isSuperAdmin], controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
