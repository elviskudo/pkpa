const x = require('../xendit');

const { Card } = x;
const card = new Card({});

// These IDs should be obtained using Xendit.js
// https://docs.xendit.co/xenpayments/payments-credit-cards-overview/credit-cards-integration-and-testing/collecting-card-details-tokenization/index.html
// const tokenID = '5e0461a86113354249aab7ec';
// const authID = '5e0461a96113354249aab7ee';

const createCharge = async (payload) => {
  try {
    const c = await card.createCharge({
      tokenID: payload.tokenID,
      authID: payload.authID,
      amount: payload.amount,
      externalID: Date.now().toString(),
      capture: true,
      metadata: payload.metadata,
    });
    return c;
  } catch (error) {
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
