/* eslint-disable camelcase */
const dotenv = require('dotenv');
const { success, error } = require('../utils/response-api');
const db = require('../models');
// const dbModel = require('../models/nosql/log_trx_payment_gateway');
const va = require('../utils/xendit/va');
const ew = require('../utils/xendit/ewallet');
const cc = require('../utils/xendit/card');
const mailCCPaid = require('../utils/email/cc_paid');
const student = require('../utils/create_noreg');
const { invoice } = require('../utils/invoice');

dotenv.config();

const UUniv = db.user_universities;
const User = db.users;
const Payment = db.trx_payment;
const Bank = db.master_bank;
const PhaseUniv = db.phase_universities;

const createVAByUser = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { bank_id, phase_university_id } = req.body;
    const amount = process.env.XENDIT_AMOUNT; // req.body;

    const user = await User.findByPk(req.userId);
    const bank = await Bank.findOne({ where: { id: bank_id, type: 'va' } });
    const phaseUniv = await PhaseUniv.findOne({ where: { id: phase_university_id, is_active: true, status: 'Daftar' } });

    if (!bank) {
      return res.send(error('Bank tidak ditemukan', req.body, res.statusCode));
    }

    if (!phaseUniv) {
      return res.send(error('Gelombang tidak ditemukan atau telah ditutup', req.body, res.statusCode));
    }

    const dataFVA = {
      externalID: `va-${user.phone_no}`, // 'va-1475804036622',
      bankCode: bank.bank_code, // 'BNI',
      name: user.fullname, // 'Michael Chen',
      isClosed: true,
      expectedAmt: amount,
      option: {
        user_id: req.userId,
      },
    };
    const v = await va.createFixedVA(dataFVA);
    const inv = await invoice(phase_university_id);

    console.log('req.body', req.body);
    console.log('amount', amount);
    console.log('user', user);
    console.log('bank', bank);
    console.log('phaseUniv', phaseUniv);
    console.log('data FVA', dataFVA);
    console.log('v', v);
    console.log('inv', inv);

/*    const pPayment = {
      user_id: req.userId,
      bank_id,
      trx_id: v.id ?? 'error',
      amount,
      external_id: v.external_id,
      account_number: v.account_number,
      expiration_date: v.expiration_date,
      status: v.status,
      phase_university_id,
      invoice: inv,
    };
    await Payment.create(pPayment);

    return res.send(success('Success callback from virtual account', v, res.statusCode));
*/
  } catch (err) {
    console.log(err);
    if (err.name === 'SequelizeValidationError') {
      return res.send(error(err.errors.map((e) => e.message), '400'));
      // return res.status(400).json({
      //   success: false,
      //   msg: err.errors.map((e) => e.message),
      // });
    }
    next(err);
    // return res.status(404).send(error(err, res.statusCode, true));
  }
};

const createEWalletByUser = async (req, res, next) => {
  try {
    const { bank_id, phase_university_id } = req.body;
    const amount = parseInt(process.env.XENDIT_AMOUNT, 10);

    const bank = await Bank.findOne({ where: { id: bank_id, type: 'ewallet' } });
    if (!bank) {
      return res.send(error('Bank tidak ditemukan', req.body, res.statusCode));
    }

    const phaseUniv = await PhaseUniv.findOne({ where: { id: phase_university_id, is_active: true, status: 'Daftar' } });
    if (!phaseUniv) {
      return res.send(error('Gelombang tidak ditemukan atau telah ditutup', req.body, res.statusCode));
    }

    const channelCode = bank.bank_code;

    const user = await User.findByPk(req.userId);
    let hp = user.phone_no;
    const getExtractHp = hp.substring(0, 1);
    if (getExtractHp === '0') {
      hp = `+62${hp.substring(1)}`;
    } else if (getExtractHp !== '0' && getExtractHp !== '+') {
      hp = `+62${hp.substring(0)}`;
    }

    const params = {
      channelCode,
      mobileNumber: hp,
      amount,
      branch_code: {
        user_id: req.userId,
        phase_university_id,
      },
    };
    console.log(params);
    const e = await ew.createEWalletCharge(params);

    const inv = await invoice(phase_university_id);
    const pPayment = {
      user_id: req.userId,
      bank_id,
      trx_id: e.id ?? 'error',
      amount,
      external_id: e.business_id,
      account_number: e.reference_id,
      // expiration_date: v.expiration_date,
      status: e.status,
      phase_university_id,
      invoice: inv,
    };
    await Payment.create(pPayment);
    console.log(e);
    return res.send(success('Success create ewallet', e, res.statusCode));
  } catch (err) {
    console.log(err);
    if (err.name === 'SequelizeValidationError') {
      return res.send(error(err.errors.map((e) => e.message), '400'));
      // return res.status(400).json({
      //   success: false,
      //   msg: err.errors.map((e) => e.message),
      // });
    }
    next(err);
  }
};

const createCCByUser = async (req, res, next) => {
  const {
    id, authentication_id, card_cvn, phase_university_id,
  } = req.body;
  const user_id = req.userId;
  const amount = parseInt(process.env.XENDIT_AMOUNT, 10);

  try {
    const phaseUniv = await PhaseUniv.findOne({ where: { id: phase_university_id, is_active: true, status: 'Daftar' } });
    if (!phaseUniv) {
      return res.send(error('Gelombang tidak ditemukan atau telah ditutup', req.body, res.statusCode));
    }

    const params = {
      tokenID: id,
      authID: authentication_id,
      amount,
      cardCvn: card_cvn,
      metadata: {
        user_id,
        phase_university_id,
      },
    };
    const c = await cc.createCharge(params);
    console.log(c);
    const pPayment = {};

    if (c) {
      const inv = await invoice(phase_university_id);
      const bank = await Bank.findOne({ where: { bank_code: c.card_brand } });
      pPayment.trx_id = c.credit_card_token_id;
      pPayment.bank_id = bank.id;
      pPayment.user_id = user_id;
      pPayment.amount = params.amount;
      pPayment.external_id = c.business_id;
      pPayment.account_number = c.masked_card_number;
      pPayment.status = c.status;
      pPayment.phase_university_id = phase_university_id;
      pPayment.invoice = inv;

      await Payment.create(pPayment);

      // pembayaran successful
      if (c.status === 'CAPTURED') {
        await UUniv.update({ status: 'paid' }, { where: { user_id, phase_university_id, status: 'pending' } });
        // create no registration in tbl student
        student.createStudent({ user_id, phase_university_id });

        const user = await User.findByPk(user_id, { attributes: ['id', 'email'] });
        const payload = {
          email: user.email,
          amount: c.capture_amount,
          payment_id: c.credit_card_token_id,
          transaction_timestamp: c.created,
        };
        mailCCPaid.createMail(payload);

        // push notification
        const io = req.app.get('socketio');
        io.emit('check-payment', { success: true, user_id, method: 'cc' });
      }

      return res.send(success('Success create credit card', c, res.statusCode));
    }
    return res.send(error('error create credit card', c, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createVAByUser,
  createEWalletByUser,
  createCCByUser,
};
