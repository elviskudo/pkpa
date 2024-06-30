const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/show_course.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createData);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/course', [authJwt.isUser], controller.getDataCourse);
router.get('/:id', [authJwt.isSuperAdmin], controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);

module.exports = router;
