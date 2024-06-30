const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    // required: true,
  },
  id: {
    type: String,
  },
  trx_id: {
    type: String,
  },
  trx_type: {
    type: String, // request, response, callback
    // required: true,
  },
  payment_type: {
    type: String, // va, ewallet, direct debit, cc
    // required: true,
  },
  http_method: {
    type: String, // get, post, patch
  },
  method_name: {
    type: String, // createFixedVA,
    // required: true,
  },
  payment_id: {
    type: String,
  },
  code: {
    type: String,
  },
  error: {
    type: Boolean,
  },
  message: {
    type: Object,
  },
  external_id: {
    type: String,
  },
  callback_virtual_account_id: {
    type: String,
  },
  owner_id: {
    type: String,
  },
  bank_code: {
    type: String,
  },
  merchant_code: {
    type: String,
  },
  account_number: {
    type: String,
  },
  name: {
    type: String,
  },
  sender_name: {
    type: String,
  },
  currency: {
    type: String,
  },
  is_single_use: {
    type: Boolean,
  },
  is_closed: {
    type: Boolean,
  },
  expected_amount: {
    type: Number,
  },
  suggested_amount: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  transaction_timestamp: {
    type: Date,
  },
  expiration_date: {
    type: Date,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  data_raw: {
    type: Object,
  },
  payload_raw: {
    type: Object,
  },
  is_cb: {
    type: Boolean,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const notif = mongoose.model('log_trx_payment_gateway', notifSchema);

module.exports = notif;
