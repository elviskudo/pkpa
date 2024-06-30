const bcrypt = require('bcryptjs');
const { success, error } = require('../utils/response-api');
const sendMailRegister = require('../utils/mailer_forgot_pass');
const db = require('../models');

const User = db.users;

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  try {
    const emailPayload = {};
    emailPayload.email = email;
    // eslint-disable-next-line max-len
    emailPayload.urlVerify = `${process.env.BASE_URL_TARGET}/forgot-password/change-forgot-pass/?email=${Buffer.from(email).toString('base64')}`;
    console.log(emailPayload);
    sendMailRegister(emailPayload);
    return res.status(201).send({
      status: 'success',
      message: 'Permintaan perubahan password berhasil dikirim, silakan cek email untuk verifikasi',
      data: {
        email,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateForgotPassword = async (req, res, next) => {
  // const { password, newpassword, email } = req.body;
  try {
    const email = Buffer.from(req.body.email, 'base64').toString('ascii');
    const password = bcrypt.hashSync(req.body.newpassword, 8);

    User.findOne({
      where: { email },
    }).then((user) => {
      if (!user) {
        return res.status(404).send({ status: 'fail', message: 'User tidak ditemukan' });
      }
    }).catch((err) => res.status(500).send({ status: 'fail', message: err.message }));

    await db.sequelize.transaction(async (t) => {
      const data = {
        email,
        password,
      };
      const user = await User.update(data, {
        where: {
          email,
        },
        transaction: t,
      });
      if (user) {
        return res.send(success('Update user berhasil', { userId: user.id }, res.statusCode));
      }
      return res.status(404).send(error('Update user gagal. User tidak ditemukan', res.statusCode, true));
    });
  } catch (err) {
    next(err);
  }
};

exports.emailVerify = (req, res) => {
  const { email } = req.params;
  const decodeEmail = Buffer.from(email, 'base64').toString('ascii');

  User.findOne({
    where: { email: decodeEmail },
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ status: 'fail', message: 'User tidak ditemukan' });
    }
    if (user.email_verified_at != null) {
      return res.status(404).send({ status: 'fail', message: 'Email telah diverifikasi' });
    }
  }).catch((err) => res.status(500).send({ status: 'fail', message: err.message }));
};

module.exports = {
  forgotPassword,
  updateForgotPassword,
};
