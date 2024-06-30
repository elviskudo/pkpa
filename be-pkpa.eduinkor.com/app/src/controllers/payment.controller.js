/* eslint-disable camelcase */
const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY,
});
const Op = require('sequelize').Op;

const { success, error } = require('../utils/response-api');
const dbModel = require('../models/nosql/log_trx_payment_gateway');
const mailVA = require('../utils/email/va_created');
const mailVAPaid = require('../utils/email/va_paid');
const mailEWalletPaid = require('../utils/email/ewallet_paid');
const student = require('../utils/create_noreg');
const db = require('../models');

const User = db.users;
const Student = db.student;
const Payment = db.trx_payment;
const UUniv = db.user_universities;

const getCBDirectDebit = (req, res, next) => {
  try {
    const data = req.body;
    return res.send(success('Success callback from direct debit', data, res.statusCode));
  } catch (err) {
    next(err);
    return res.status(404).send(error(err, res.statusCode, true));
  }
};

const getCBVACreated = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(req.body);
    const user = await User.findOne({ where: { phone_no: data.external_id.split('-')[1] }, attributes: ['id', 'email'] });
    console.log(user);
    data.user_id = user.id;
    data.trx_id = data.id;
    data.trx_type = 'callback';
    data.payment_type = 'va';
    data.http_method = 'post';
    data.method_name = 'FVA created';
    data.data_raw = JSON.stringify(req.body);

    await dbModel.create(data);

    const pData = {
      status: data.status,
    };
    const where = {
      trx_id: data.id,
    };
    await Payment.update(pData, { where });

    const payload = {
      email: user.email,
      account_number: data.account_number,
    };
    console.log(payload);
    if (data.status === 'ACTIVE') {
      mailVA.createMail(payload);
    }

    console.log('success callback va created');
    return res.send(success('Success callback from VA Created', data, res.statusCode));
  } catch (err) {
    console.log('failed callback va created: ', err);
    next(err);
    return res.status(404).send(error(err, res.statusCode, true));
  }
};

const getCBVAPaid = async (req, res, next) => {
  try {
    const data = req.body;
    data.data_raw = JSON.stringify(req.body);

    if (req.body.payment_id) {
      await db.sequelize.transaction(async (t) => {
        await db.sequelize.query('update trx_payment \
          set status = \'COMPLETED\' \
          where id = (select id from trx_payment where external_id = :external_id and status = \'ACTIVE\' and amount = :amount order by created_at desc limit 1) \
          ', {
          replacements: { external_id: data.external_id, amount: data.amount },
          type: db.sequelize.QueryTypes.SELECT,
        },
          { transaction: t });
        const p = await Payment.findOne({
          where: { external_id: data.external_id, status: 'COMPLETED', amount: data.amount },
          order: [['created_at', 'DESC']],
        });
        const { user_id, phase_university_id } = p;
        await UUniv.update({ status: 'paid' }, { where: { user_id, phase_university_id, status: 'pending' } }, { transaction: t });

        // create no registration in tbl student
        student.createStudent(p);

        const user = await User.findOne({ where: { phone_no: data.external_id.split('-')[1] }, attributes: ['id', 'email'] });
        const payload = {
          email: user.email,
          amount: data.amount,
          payment_id: data.payment_id,
          transaction_timestamp: data.transaction_timestamp,
        };
        mailVAPaid.createMail(payload);

        // push notification
        const io = req.app.get('socketio');
        io.emit('check-payment', { success: true, user_id, method: 'va' });

        data.user_id = user.id;
        data.trx_type = 'callback';
        data.payment_type = 'va';
        data.http_method = 'post';
        data.method_name = 'FVA paid';
        data.status = 'COMPLETED';
      });
    }

    await dbModel.create(data);

    return res.send(success('Success callback from VA Paid', data, res.statusCode));
  } catch (err) {
    console.log('failed callback va paid: ', err);
    next(err);
    return res.status(404).send(error(err, res.statusCode, true));
  }
};

const getCBEWallet = async (req, res, next) => {
  try {
    const data = req.body;
    data.data_raw = JSON.stringify(req.body);
    console.log(data);
    console.log(data.status);
    if (data.data.status === 'SUCCEEDED') {
      await db.sequelize.transaction(async (t) => {
        await db.sequelize.query('update trx_payment \
        set status = \'COMPLETED\' \
        where trx_id = :trx_id \
        ', { replacements: { trx_id: data.data.id }, type: db.sequelize.QueryTypes.SELECT }, { transaction: t });

        const p = await Payment.findOne({
          where: { trx_id: data.data.id },
        });
        const { user_id, phase_university_id } = p;
        await UUniv.update({ status: 'paid' }, { where: { user_id, phase_university_id, status: 'pending' } }, { transaction: t });

        // create no registration in tbl student
        student.createStudent(p);

        const user = await User.findByPk(user_id, { attributes: ['id', 'email'] });
        const payload = {
          email: user.email,
          amount: data.data.charge_amount,
          payment_id: data.data.reference_id,
          transaction_timestamp: data.created,
        };
        mailEWalletPaid.createMail(payload);

        // push notification
        const io = req.app.get('socketio');
        io.emit('check-payment', { success: true, user_id, method: 'ewallet' });

        data.user_id = user_id;
        data.id = data.data.id;
        data.status = data.data.status;
        data.owner_id = data.business_id;
        data.external_id = data.data.reference_id;
        data.bank_code = data.data.channel_code;
        data.amount = data.data.charge_amount;
        data.currency = data.data.currency;
      });
    }
    data.trx_type = 'callback';
    data.payment_type = 'ewallet';
    data.http_method = 'post';
    await dbModel.create(data);

    console.log(data);
    return res.send(success('Success callback from ewallet', data, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
    return res.status(404).send(error(err, res.statusCode, true));
  }
};

const getInvoicePaid = (req, res, next) => {
  try {
    const data = req.body;
    return res.send(success('Success callback from invoice', data, res.statusCode));
  } catch (err) {
    next(err);
    return res.status(404).send(error(err, res.statusCode, true));
  }
};

const createInvoice = async (req, res, next) => {
  req.body && console.log("body /invoice/create", req.body);

  const { phaseID, userID, amount, payerEmail, description } = req.body;
  console.log('req.body', req.body)
  console.log('phaseID', phaseID)
  console.log('userID', userID)
  console.log('amount', amount)
  console.log('payerEmail', payerEmail)
  console.log('description', description)

  const dt = new Date()
  const month = ('0' + (dt.getMonth() + 1)).slice(-2)
  const date = ('0' + dt.getDate()).slice(-2)
  let externalID = req.body.externalID + '-' + dt.getFullYear() + month + date

  const { Invoice } = x;
  const invoiceSpecificOptions = {};
  const i = new Invoice(invoiceSpecificOptions);
  console.log('xendit secret key', process.env.XENDIT_SECRET_KEY)
  try {
    const resp = await i.createInvoice({
      externalID,
      amount,
      payerEmail,
      shouldSendEmail: true,
      description,
      successRedirectURL: `https://be.adrlawacademy.com/api/v1/payment/invoice/success?userId=${userID}&external_id=${externalID}&phase_university_id=${phaseID}`,
      failureRedirectURL: "https://be.adrlawacademy.com/api/v1/payment/invoice/failed",
      currency: "IDR",
      reminderTime: 1,
      paymentMethods: [],
    });
    console.log('response invoice create');
    console.log(resp);

    // add to trx payment
    const trxPayment = {
      user_id: userID,
      trx_id: externalID,
      trx_type: 'callback',
      payment_type: 'cc',
      http_method: 'post',
      method_name: 'Payment created',
      data_raw: JSON.stringify(req.body),
    };
    await dbModel.create(trxPayment);

    let today = new Date();
    const tomorrow = today.setDate(today.getDate() + 1);

    const lastInc = await Payment.findOne({
      where: {
        invoice: {
          [Op.not]: null
        }
      },
      order: [['id', 'DESC']]
    })

    const number = parseInt((lastInc.invoice.substring(20, 4)).slice(-4))
    const incVal = ('0000' + (number + 1)).slice(-4)
    const invoice = today.getFullYear().toString().substr(-2) + '.INV.01.02.' + incVal

    const payment = {
      status: 'PENDING',
      user_id: userID,
      amount: amount,
      trx_id: resp.id,
      bank_id: 18,
      invoice: invoice,
      phase_university_id: phaseID,
      external_id: externalID,
      expiration_date: tomorrow
    };
    console.log('payment');
    console.log(payment);
    await Payment.create(payment);

    res.send(resp);
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

const getInvoiceSuccess = async (req, res, next) => {
  const userID = req.query.userId
  const externalID = req.query.external_id
  const phaseUniversityID = req.query.phase_university_id

  await Payment.update({ status: 'COMPLETED' }, {
    where: {
      user_id: userID,
      external_id: externalID,
    }
  })

  // insert to table student
  const today = new Date();

  const lastInc = await Student.findOne({
    where: {
      phase_university_id: phaseUniversityID
    },
    order: [['id', 'DESC']]
  })

  const reg_no = createIncrement(today.getFullYear(), phaseUniversityID, lastInc.reg_no.slice(-4))
  console.log('reg_no', reg_no)

  const student = await Student.findOne({
    where: {
      user_id: userID
    }
  });

  if (student) {
    await Student.update({ reg_no: reg_no }, {
      where: {
        user_id: userID,
        phase_university_id: phaseUniversityID
      }
    })
  } else {
    await Student.create({
      user_id: userID,
      phase_university_id: phaseUniversityID,
      reg_no: reg_no
    })
  }

  await UUniv.update({ status: 'paid' }, {
    where: {
      user_id: userID,
      phase_university_id: phaseUniversityID
    }
  })

  res.redirect(process.env.BASE_URL_TARGET)
}

const createIncrement = (year, campusId, lastIncrement) => {
  const currentYear = new Date().getFullYear().toString();

  // Cek apakah tahun sama
  if (year === currentYear) {
    // Cek apakah id kampus sama
    if (campusId === lastIncrement.slice(4, 6)) {
      // Ambil increment yang terakhir
      let lastNum = parseInt(lastIncrement.slice(6));
      // Tambahkan 1 ke increment
      lastNum++;
      // Ubah menjadi string dengan padding nol di depan
      lastIncrement = lastNum.toString().padStart(4, '0');
    } else {
      // Jika id kampus berbeda, reset increment menjadi '0001'
      lastIncrement = '0001';
    }
  } else {
    // Jika tahun berbeda, reset increment menjadi '0001'
    lastIncrement = '0001';
  }

  // Gabungkan tahun, id kampus, dan increment yang baru
  return currentYear + '0' + campusId + lastIncrement;
}

const getInvoiceFailed = (req, res, next) => {
  res.send('Anda gagal melakukan pembayaran');
}

module.exports = {
  getCBDirectDebit,
  getCBVACreated,
  getCBVAPaid,
  getInvoicePaid,
  getCBEWallet,
  createInvoice,
  getInvoiceSuccess,
  getInvoiceFailed,
};
