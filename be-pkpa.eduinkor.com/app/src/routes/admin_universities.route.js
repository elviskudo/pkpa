const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/admin_univ.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createData);
// router.get('/order', controller.getCountOrder);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/:id', controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
