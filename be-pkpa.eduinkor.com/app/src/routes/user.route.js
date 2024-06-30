const express = require('express');
// const { body } = require('express-validator');
const { check } = require('express-validator');
const { authJwt } = require('../middleware');
const upload = require('../utils/upload/file_upload');
// const express = require('express');
const controller = require('../controllers/user.controller');
const { validate } = require('../middleware/validate');
const db = require('../models');

const User = db.users;

// Set The Express Router
const router = express.Router();

router.post('/', [authJwt.isSuperAdmin], controller.createUserAdmin);
router.get('/', controller.getUser);
router.put('/remidial', [authJwt.isUser], controller.updateRemidialUser);
router.get('/verify-file', [authJwt.isUser], controller.getStatusFileUser);
router.get('/status-paid', [authJwt.isUser], controller.getStatusPaidUser);
router.get('/admin-univ', [authJwt.isSuperAdmin], controller.getUserAdminUniv);
router.get('/user', controller.getUserByUser);
router.put('/pass', controller.getChangePassByUser);
// router.put('/UpdateTutorCourse', controller.UpdateTutorCourse);
router.get('/universitas', controller.getUnivercityByUser);
// router.post('/create-admin-univ', [authJwt.isSuperAdmin], controller.createAdminUniversitas);
router.get('/user-tutor', [authJwt.isSuperAdmin], controller.getUserTutor);
router.get('/user-trx-c', controller.getUserTrxCompleted);
router.get('/user-trx-p', controller.getUserTrxPending);
router.get('/user-trx-view-c/:id', controller.getUserTrxViewCompleted);
router.get('/user-trx-view-p/:id', controller.getUserTrxViewPending);
router.get('/user-trx-detail/:id', controller.getUserTrxDetail);
router.get('/user-dewan', [authJwt.isSuperAdmin], controller.getUserDewanPanelis);
// router.post('/forgotPassword', controller.forgotPassword);
// router.put('/passx', controller.CreateChangePassByUser);
// router.get('/newest', [authJwt.isSuperAdmin], controller.getBookLessThan2Years);
// router.get('/all', [authJwt.isSuperAdmin], controller.getAllUser);
router.put('/update-admin-univ/:id', controller.updateAdminUniv);
router.post('/createUserByAdmin', [authJwt.isSuperAdmin], upload('admin-registration').fields([{
  name: 'cv', maxCount: 1,
}, {
  name: 'ktp', maxCount: 1,
}, {
  name: 'foto', maxCount: 1,
}, {
  name: 'ijazah', maxCount: 1,
}, {
  name: 'sertifikat_akreditasi', maxCount: 1,
}]), controller.createUserByAdmin);
router.post('/createRegistrantByAdmin', [authJwt.isSuperAdmin], upload('admin-registration').fields([{
  name: 'cv', maxCount: 1,
}, {
  name: 'ktp', maxCount: 1,
}, {
  name: 'foto', maxCount: 1,
}, {
  name: 'ijazah', maxCount: 1,
}, {
  name: 'sertifikat_akreditasi', maxCount: 1,
}]), controller.createRegistrantByAdmin);
// router.post('/createTutorByAdmin', controller.createTutorByAdmin);
router.put('/UpdateUserByAdmin', [authJwt.isSuperAdmin], upload('admin-registration').fields([{
  name: 'cv', maxCount: 1,
}, {
  name: 'ktp', maxCount: 1,
}, {
  name: 'foto', maxCount: 1,
}, {
  name: 'ijazah', maxCount: 1,
}, {
  name: 'sertifikat_akreditasi', maxCount: 1,
}]), controller.updateUserByAdmin);

router.put('/', upload('user-registration').fields([{
  name: 'cv', maxCount: 1,
}, {
  name: 'ktp', maxCount: 1,
}, {
  name: 'foto', maxCount: 1,
}, {
  name: 'ijazah', maxCount: 1,
}, {
  name: 'sertifikat_akreditasi', maxCount: 1,
}]), controller.updateUserByUser);

router.get('/:id', [authJwt.isSuperAdmin], controller.getUserById);
router.put('/:id', [authJwt.isSuperAdmin], upload('user-registration').fields([{
  name: 'cv', maxCount: 1,
}, {
  name: 'ktp', maxCount: 1,
}, {
  name: 'foto', maxCount: 1,
}, {
  name: 'ijazah', maxCount: 1,
}, {
  name: 'sertifikat_akreditasi', maxCount: 1,
}]), [authJwt.isSuperAdmin], controller.updateUserById);
router.delete('/:id', [authJwt.isSuperAdmin], controller.deleteUser);

// Export the Router
module.exports = router;
