const express = require('express');
const { authJwt } = require('../middleware');
const upload = require('../utils/upload/file_upload');
const controller = require('../controllers/user_live_streaming.controller');

// Set The Express Router
const router = express.Router();

// router.post('/', upload('screenshot').fields([{
//   name: 'screenshot', maxCount: 1,
// }]), [authJwt.isUser], controller.createData);
router.post('/', upload('screenshot').fields([{
  name: 'screenshot', maxCount: 1,
}]), [authJwt.isUser], controller.updateOrCreateData);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/:id', [authJwt.isSuperAdmin], controller.getDataById);
// router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
// router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
