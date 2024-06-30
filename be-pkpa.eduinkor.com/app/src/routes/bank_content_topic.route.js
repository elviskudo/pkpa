const express = require('express');
const { authJwt } = require('../middleware');
const upload = require('../utils/upload/file_upload_content');

const controller = require('../controllers/bank_content_topic.controller');

// Set The Express Router
const router = express.Router();

router.post('/', upload('content').fields([{
  name: 'url', maxCount: 1,
}]), [authJwt.isSuperAdmin], controller.createData);
router.get('/', controller.getAllData);
router.get('/:id', controller.getDataById);
router.put('/:id', upload('content').fields([{
  name: 'url', maxCount: 1,
}]), [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
