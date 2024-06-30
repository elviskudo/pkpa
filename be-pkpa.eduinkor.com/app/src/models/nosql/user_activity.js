const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  last_login: {
    type: Date,
    required: true,
  },
  last_date: {
    type: Date,
    required: true,
  },
  progress: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const notif = mongoose.model('user_activity', notifSchema);

module.exports = notif;
