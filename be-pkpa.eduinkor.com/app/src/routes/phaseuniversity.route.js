const express = require('express');
const controller = require('../controllers/phaseuniversiti.controller');
const { authJwt } = require('../middleware');

// Set The Express Router
const router = express.Router();

router.post('/', controller.createPhaseUniversity);
router.put('/', controller.updatePhaseUniversity);
router.get('/', controller.getPhaseUniversityAll);
router.get('/setting', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getPhaseUniversitySettingUniv);
router.get('/:id', controller.getPhaseUniversityById);
router.get('/phase-count/:university_id', controller.getPhaseUnivCount);

module.exports = router;
