const router = require('express').Router();
const forumController = require('../controllers/forum.controller');
// const { authJwt } = require('../middleware');

router.route('/data')
  .get(forumController.ShowPost)
  .post(forumController.CreatePost);

router.route('/data/activity')
  .get(forumController.ShowInActivity);

router.route('/data/:post_id')
  .get(forumController.ShowPostById);

router.route('/data/update')
  .post(forumController.ExampleUpdateUser);

router.route('/data/new/like')
  .post(forumController.CreateLike);

router.route('/data/comment')
  .post(forumController.CreateComment);

router.route('/data/comment/like')
  .post(forumController.CreateLikeComment);

router.route('/data/recomment/like')
  .post(forumController.CreateLikeReComment);

router.route('/data/recomment')
  .post(forumController.CreateReComment);

router.route('/data/recomment/child')
  .post(forumController.CreateReCommentChild);
// router.route('/data/:post_id')
//   .get(forumController.view)
//   .delete(forumController.delete);

// router.route('/data/like/:user_id')
//   .get(forumController.likeShow);

// router.route('/data/like/show')
//   .get(forumController.likeTrue);

// router.route('/data/new/like')
//   .post(forumController.likeMake);

// router.route('/data/del/like')
//   .post(forumController.likeRemove);
// router.route('/post/:user_id')
//   .get(forumController.getuser);
//   .patch(postController.update)
//   .put(postController.update)
module.exports = router;
