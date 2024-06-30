const mail = require('./config_mail');

exports.createMail = (payload) => {
  const params = {
    to: payload.email,
    subject: 'Success Registration',
    // html: `<h4>Silakan klik link berikut untuk verifikasi: <a href="${payload.urlVerify}">${payload.urlVerify}</a></h4>`,
    html: `<h1>Halo ${payload.fullname}</h1>
    <br>
    <p>Berkas pendaftaran kamu sedang ditinjau.</p>
    `,
  };
  try {
    mail.sendMail(params);
  } catch (err) {
    console.log(err);
  }
};
