const express = require('express');
// const { authJwt } = require('../middleware');

const controller = require('../controllers/registrant.controller');

// Set The Express Router
const router = express.Router();

// router.post('/', controller.createData);
router.get('/', controller.getAllData);
// router.get('/:id', controller.getDataById);
router.put('/file/update', controller.updateDataFile);
// router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteData);

// Export the Router
module.exports = router;
