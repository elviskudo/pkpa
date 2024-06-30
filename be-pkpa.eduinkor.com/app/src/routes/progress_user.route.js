const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/progress_user.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isUser], controller.createData);
router.get('/', controller.getAllData);
router.get('/:id', controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
