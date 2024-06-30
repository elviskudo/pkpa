const x = require('../xendit');
// const db = require('../../models');

const dbModel = require('../../models/nosql/log_trx_payment_gateway');

const { VirtualAcc } = x;
const vaSpecificOptions = {};
const va = new VirtualAcc(vaSpecificOptions);

const createFixedVA = async (payload) => {
  try {
    const v = await va.createFixedVA({
      externalID: payload.externalID, // 'va-1475804036622',
      bankCode: payload.bankCode, // 'BNI',
      name: payload.name, // 'Michael Chen',
      isClosed: payload.isClosed,
      expectedAmt: payload.expectedAmt,
    });
    console.log('payload', payload);
    console.log('v', v);
    v.user_id = payload.option.user_id;
    v.trx_type = 'request';
    v.payment_type = 'va';
    v.http_method = 'post';
    v.data_raw = JSON.stringify(v);
    v.payload_raw = JSON.stringify(payload);

    await dbModel.create(v);
    return v;
  } catch (error) {
    const data = {};
    data.payload_raw = JSON.stringify(payload);
    data.data_raw = JSON.stringify(error);
    data.user_id = payload.option.user_id;
    data.trx_type = 'request';
    data.payment_type = 'va';
    data.http_method = 'post';
    data.status = 'ERROR';

    await dbModel.create(data);
    console.log(error);
  }
};

module.exports = {
  createFixedVA,
};
