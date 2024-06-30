const express = require('express');
const controller = require('../controllers/user_university.controller');

const { authJwt } = require('../middleware');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isUser], controller.createUserUniversity);
router.get('/history-phase', [authJwt.isUser], controller.getHistoryPhaseUniversityUser);
router.get('/:phase_id', [authJwt.isUser], controller.getUserUniversityById);

module.exports = router;
