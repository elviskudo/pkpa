const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/student.controller');

// Set The Express Router
const router = express.Router();

// router.post('/', controller.createData);
router.post('/studentAdmin', [authJwt.isSuperAdmin], controller.createStudentByAdmin);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/:id', controller.getDataById);
// router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
// router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;