const x = require('../xendit');
const dbModel = require('../../models/nosql/log_trx_payment_gateway');

const { Card } = x;
const card = new Card({});

// These IDs should be obtained using Xendit.js
// https://docs.xendit.co/xenpayments/payments-credit-cards-overview/credit-cards-integration-and-testing/collecting-card-details-tokenization/index.html
// const tokenID = '5e0461a86113354249aab7ec';
// const authID = '5e0461a96113354249aab7ee';

const createCharge = async (payload) => {
  const params = {
    tokenID: payload.tokenID,
    authID: payload.authID,
    amount: payload.amount,
    externalID: Date.now().toString(),
    cardCVN: payload.cardCvn,
    capture: true,
    metadata: payload.metadata,
  };
  try {
    const c = await card.createCharge(params);
    c.data_raw = JSON.stringify(c);
    c.payload_raw = JSON.stringify(params);
    c.expected_amount = params.amount;
    c.trx_type = 'request';
    c.payment_type = 'cc';
    c.http_method = 'post';
    c.method_name = 'createCharge';
    c.external_id = c.reference_id;
    c.owner_id = c.business_id;
    c.user_id = params.metadata.user_id;
    if (c.charge_type === 'SINGLE_USE_TOKEN') {
      c.is_single_use = true;
    } else {
      c.is_single_use = false;
    }
    await dbModel.create(c);
    return c;
  } catch (error) {
    const data = {};
    data.expected_amount = payload.amount;
    data.trx_type = 'request';
    data.payment_type = 'cc';
    data.http_method = 'post';
    data.method_name = 'createCharge';
    data.status = 'ERROR';
    // data.bank_code = payload.channelCode;
    data.user_id = params.metadata.user_id;
    data.payload_raw = JSON.stringify(params);
    data.data_raw = JSON.stringify(error);
    await dbModel.create(data);
    console.log(error);
  }
};

// capture is called if captiure param in createCharge is set false
const capture = async (payload) => {
  try {
    const cap = await card.captureCharge({
      chargeID: payload.chargeID,
      amount: payload.amount,
    });
    return cap;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCharge,
  capture,
};
