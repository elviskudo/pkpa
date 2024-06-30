const express = require('express');
const { authJwt } = require('../middleware');
const controller = require('../controllers/homepage.controller');
const upload = require('../utils/upload/file_upload');

// Set The Express Router
const router = express.Router();
router.post('/', [authJwt.verifyToken, authJwt.isSuperAdmin], upload('homepage').fields([{
  name: 'img_url', maxCount: 1,
}]), controller.createHompage);
router.post('/component', [authJwt.verifyToken, authJwt.isSuperAdmin], upload('homepage').fields([{
  name: 'img_url', maxCount: 1,
}]), controller.createComponentHomepage);

router.get('/', controller.getDataAll);
router.get('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getDatabyId);
router.get('/univ/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], controller.getDatabyUniv);

module.exports = router;
