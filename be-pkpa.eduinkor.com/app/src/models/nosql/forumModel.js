const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    require: true,
  },
  user_img: {
    type: String,
    require: true,
  },
  user_fullname: {
    type: String,
    require: true,
  },
});

const postSchema = new mongoose.Schema({
  count_like: {
    type: Number,
    required: true,
    default: 0,
  },
  count_disslike: {
    type: Number,
    required: true,
    default: 0,
  },
  uid_like: {
    type: [Number],
    required: true,
  },
  uid_disslike: {
    type: [Number],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const recommentSchema = new mongoose.Schema({
  c_id: {
    type: mongoose.ObjectId,
    default: null,
  },
  head_user: userSchema,
  user: userSchema,
  comment_value: {
    type: String,
    required: true,
  },
  uid_like: {
    type: [Number],
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const commentSchema = new mongoose.Schema({
  head_user: userSchema,
  user: userSchema,
  comment_value: {
    type: String,
    required: true,
  },
  uid_like: {
    type: [Number],
    default: null,
  },
  recomment: [recommentSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const forumSchema = new mongoose.Schema({
  post_target: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  post_heading: {
    type: String,
    required: true,
  },
  post_value: {
    type: String,
    required: true,
  },
  post_detail: postSchema,
  author: userSchema,
  comment: [commentSchema],
});

const forumModel = mongoose.model('db_forums', forumSchema);

module.exports = forumModel;
