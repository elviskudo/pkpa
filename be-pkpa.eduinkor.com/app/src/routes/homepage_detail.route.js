const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/homepage_detail.controller');
// const upload = require('../utils/upload/file_upload');
// Set The Express Router
const router = express.Router();
router.post('/', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.createHomepageDetail);
router.get('/', controller.getDataAll);
// router.get('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getDatabyId);
// router.get('/univ/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getDatabyUniv);
module.exports = router;
