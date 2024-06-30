const ejs = require('ejs');
const mail = require('./config_mail');

exports.createMail = (payload) => {
  const src = './src/views/email/berkas_rejected.ejs';
  console.log(payload);
  ejs.renderFile(src, { param: payload }, {}, async (err, str) => {
    if (err) console.log(err);
    else {
      const params = {
        to: payload.email,
        subject: payload.subject,
        html: str,
      };
      try {
        // console.log('html data ======================>', params.html);
        await mail.sendMail(params);
      } catch (errMail) {
        console.log(errMail);
      }
    }
  });
};
