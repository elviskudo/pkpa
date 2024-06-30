const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/result_answer.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isUser], controller.createData);
router.get('/result/:content_topic_id', [authJwt.isUser], controller.resultQuiz);
router.get('/list/:content_topic_id/:remidial_no', [authJwt.isUser], controller.listResult);
router.get('/', controller.getAllData);
router.get('/:id', controller.getDataById);
router.put('/:id', [authJwt.isUser], controller.updateData);
router.delete('/:id', [authJwt.isUser], controller.deleteData);

// Export the Router
module.exports = router;
