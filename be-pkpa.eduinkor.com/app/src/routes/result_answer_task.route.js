const express = require('express');
const { authJwt } = require('../middleware');
const upload = require('../utils/upload/file_upload_content');

const controller = require('../controllers/result_answer_task.controller');

// Set The Express Router
const router = express.Router();

router.post('/', upload('answer-task').fields([{
  name: 'url', maxCount: 1,
}]), [authJwt.isUser], controller.createData);
router.get('/', [authJwt.isSuperAdmin], controller.getAllData);
router.get('/:id', [authJwt.isSuperAdmin], controller.getDataById);
router.put('/:id', [authJwt.isSuperAdmin], controller.updateData);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
