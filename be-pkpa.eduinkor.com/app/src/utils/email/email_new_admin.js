const mail = require('./config_mail');

exports.createMail = (payload) => {
  const params = {
    to: payload.email,
    subject: 'Akun Berhasil Dibuat',
    html: `<h1>Halo, ${payload.fullname}</h1><br><br>
    <h4>Silakan login dengan username dan password berikut: </h4><br>
    username: ${payload.email}<br>
    password: ${payload.password}<br><br>

    Halaman login: <a href="${payload.url}">${payload.url}</a>`,
  };
  try {
    mail.sendMail(params);
  } catch (err) {
    console.log(err);
  }
};
