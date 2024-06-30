const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/history_access_contents.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isUser], controller.createData);
router.get('/count', [authJwt.isUser], controller.getCountDataByUser);
// router.get('/', [authJwt.isSuperAdmin], controller.getDataById);

module.exports = router;
