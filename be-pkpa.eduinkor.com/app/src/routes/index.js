/* eslint-disable import/no-unresolved */
const express = require('express');
const { authJwt } = require('../middleware');
// const express = require('express');

// Set The Express Router
const router = express.Router();

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

// Load The Routes
router.use('/auth', require('./auth.route'));
router.use('/user', [authJwt.verifyToken], require('./user.route'));
router.use('/admin-univ', [authJwt.verifyToken], require('./admin_universities.route'));
router.use('/homepage-detail', require('./homepage_detail.route'));
router.use('/homepage', require('./homepage.route'));
router.use('/forum', [authJwt.verifyToken], require('./forum.route'));
router.use('/university', require('./university.route'));
router.use('/upload', [authJwt.verifyToken, authJwt.isSuperAdmin], require('./upload.route'));
router.use('/state', require('./state.route'));
router.use('/country', require('./countrie.route'));
router.use('/city', require('./citie.route'));
router.use('/district', require('./district.route'));
router.use('/phase-university', require('./phaseuniversity.route'));
router.use('/user-university', [authJwt.verifyToken], require('./useruniversity.route'));
router.use('/question', [authJwt.verifyToken], require('./question.route'));
router.use('/bank-content-type', [authJwt.verifyToken], require('./bank_content_type.route'));
router.use('/bank-content-question', [authJwt.verifyToken], require('./bank_content_question.route'));
router.use('/bank-content-option', [authJwt.verifyToken], require('./bank_content_option.route'));
router.use('/bank-content-topic', [authJwt.verifyToken], require('./bank_content_topic.route'));
router.use('/bank-content-category', [authJwt.verifyToken], require('./bank_content_category.route'));
router.use('/bank-package', [authJwt.verifyToken], require('./bank_package.route'));
router.use('/bank-course', [authJwt.verifyToken], require('./bank_course.route'));
router.use('/bank-topic', [authJwt.verifyToken], require('./bank_topic.route'));
router.use('/course', [authJwt.verifyToken], require('./course.route'));
router.use('/bank', [authJwt.verifyToken], require('./bank.route'));
router.use('/notification', [authJwt.verifyToken], require('./notification.route'));
router.use('/student', [authJwt.verifyToken], require('./student.route'));
router.use('/registrant', [authJwt.verifyToken], require('./registrant.route'));
router.use('/payment', require('./payment.route'));
router.use('/payment-user', [authJwt.verifyToken], require('./payment_user.route'));
router.use('/payment-trx', [authJwt.verifyToken], require('./trx_payment.route'));
router.use('/answer', [authJwt.verifyToken], require('./result_answer.route'));
router.use('/answer-task', [authJwt.verifyToken], require('./result_answer_task.route'));
router.use('/show-course', [authJwt.verifyToken], require('./showcourse.route'));
router.use('/live-streaming', [authJwt.verifyToken], require('./live_streaming.route'));
router.use('/user-live-streaming', [authJwt.verifyToken], require('./user_live_streaming.route'));
router.use('/user-live-streaming-click', [authJwt.verifyToken], require('./user_live_streaming_clicks.route'));
router.use('/progress-user', [authJwt.verifyToken], require('./progress_user.route'));
router.use('/user-activity', [authJwt.verifyToken], require('./user_activity.route'));
router.use('/forgotpassword', require('./forgot_password.route'));
router.use('/dashboard', [authJwt.verifyToken], require('./dashboard.route'));
router.use('/view', [authJwt.verifyToken], require('./view.route'));
router.use('/test', require('./view.route'));
router.use('/testimonial', require('./testimonial.route'));
router.use('/history-access-content', [authJwt.verifyToken], require('./history_access_contents.route'));
// router.use('/getphaseuniversity', require('./phaseuniversity.route'));
// router.use('/getUversityBySlug', require('./university.route'));
// The 404 Route (ALWAYS Keep this as the last route)
router.use((req, res) => {
  res.status(404).json('endpoint is not found');
});

// Export Router
module.exports = router;
