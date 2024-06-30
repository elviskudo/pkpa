const mail = require('./config_mail');

exports.createMail = (payload) => {
  const params = {
    to: payload.email,
    subject: '[Node Email] - Success Created VA',
    html: `<h4>Virtual Account Anda:  ${payload.account_number}</h4>`,
  };
  try {
    console.log(params);
    mail.sendMail(params);
  } catch (err) {
    console.log(err);
  }
};
