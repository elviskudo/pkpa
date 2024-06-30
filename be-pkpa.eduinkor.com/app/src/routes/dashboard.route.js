const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/dashboard.controller');

// Set The Express Router
const router = express.Router();

router.get('/', [authJwt.isSuperAdmin], controller.getDataDashboard);
router.get('/userlogin', [authJwt.isSuperAdmin], controller.getDataStatistik);
router.get('/userpie', [authJwt.isSuperAdmin], controller.getPieDataStatistik);

module.exports = router;
