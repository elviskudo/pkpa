const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  status: {
    type: String,
  },
  is_read: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const notif = mongoose.model('notification', notifSchema);

module.exports = notif;
