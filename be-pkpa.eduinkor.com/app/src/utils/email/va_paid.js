const mail = require('./config_mail');

exports.createMail = (payload) => {
  const params = {
    to: payload.email,
    subject: '[Node Email] - Success Paid VA',
    html: `<h1>ID Pembayaran: ${payload.payment_id}</h1><br>
    <h4>Proses pembayaran berhasil  sebesar Rp ${payload.amount} pada waktu ${payload.transaction_timestamp}</h4>`,
  };
  try {
    mail.sendMail(params);
  } catch (err) {
    console.log(err);
  }
};
