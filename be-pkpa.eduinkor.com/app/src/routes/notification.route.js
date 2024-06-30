const express = require('express');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/notification.controller');

// Set The Express Router
const router = express.Router();
router.get('/user/count', controller.getCountData);
router.get('/user', controller.getDataByUser);
router.post('/', controller.createData);
router.get('/', controller.getAllData);
router.get('/:id', controller.getCountNotificationById);
router.put('/:id', controller.updateData);
router.delete('/:id', controller.deleteData);

// Export the Router
module.exports = router;
