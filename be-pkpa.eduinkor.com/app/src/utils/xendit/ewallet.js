const x = require('../xendit');
const dbModel = require('../../models/nosql/log_trx_payment_gateway');

const { EWallet } = x;
const ewalletSpecificOptions = {};
const ew = new EWallet(ewalletSpecificOptions);

const createEWalletCharge = async (payload) => {
  const params = {};
  if (payload.channelCode === 'ID_OVO') {
    params.channelProperties = {
      mobileNumber: payload.mobileNumber,
    };
  } else {
    params.channelProperties = {
      successRedirectURL: process.env.XENDIT_SUCCESS_REDIRECT_URL,
    };
  }
  params.referenceID = Date.now().toString();
  params.currency = 'IDR';
  params.amount = payload.amount;
  params.checkoutMethod = 'ONE_TIME_PAYMENT';
  params.channelCode = payload.channelCode;
  params.metadata = {
    branch_code: payload.branch_code,
  };

  console.log(params);
  try {
    const e = await ew.createEWalletCharge(params);
    e.data_raw = JSON.stringify(e);
    e.payload_raw = JSON.stringify(params);
    e.expected_amount = e.charge_amount;
    e.user_id = payload.branch_code.user_id;
    e.trx_type = 'request';
    e.payment_type = 'ewallet';
    e.http_method = 'post';
    e.method_name = 'createEWalletCharge';
    e.bank_code = payload.channelCode;
    e.external_id = e.reference_id;
    e.owner_id = e.business_id;
    await dbModel.create(e);
    return e;
  } catch (error) {
    const data = {};
    data.expected_amount = payload.amount;
    data.trx_type = 'request';
    data.payment_type = 'ewallet';
    data.http_method = 'post';
    data.method_name = 'createEWalletCharge';
    data.status = 'ERROR';
    data.bank_code = payload.channelCode;
    data.user_id = payload.branch_code.user_id;
    data.payload_raw = JSON.stringify(params);
    data.data_raw = JSON.stringify(error);
    await dbModel.create(data);
    console.log(error);
  }
};

module.exports = {
  createEWalletCharge,
};
