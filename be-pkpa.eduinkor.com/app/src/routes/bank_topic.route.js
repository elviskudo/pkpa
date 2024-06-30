const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/bank_topic.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createData);
router.get('/', controller.getAllData);
router.get('/:id', controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
