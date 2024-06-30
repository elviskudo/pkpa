const express = require('express');
const { authJwt } = require('../middleware');

const controller = require('../controllers/question.controller');

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createQuestion);
router.post('/answer', [authJwt.isUser], controller.createAnswer);

router.get('/answer/score/:remidial', [authJwt.isUser], controller.getResultExamPMBById);
router.get('/answer/remidial', [authJwt.isUser], controller.getRemidialTo);
router.get('/answer/:remidial', [authJwt.isUser], controller.getAllAnswer);
router.get('/:remidial', [authJwt.isUser], controller.getQuestionById);
// router.get('/verify-file', controller.getStatusFileUser);
// router.get('/newest', [authJwt.isSuperAdmin], controller.getBookLessThan2Years);
// router.get('/all', [authJwt.isSuperAdmin], controller.getAllUser);

// router.get('/:id', [authJwt.isSuperAdmin], controller.getBookById);
// router.put('/:id', [authJwt.isSuperAdmin], controller.updateUser);
// router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteUser);

// Export the Router
module.exports = router;
