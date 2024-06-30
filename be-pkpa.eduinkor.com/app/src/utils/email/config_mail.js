const nodemailer = require('nodemailer');

const sendMail = async (payload) => {
  try {
    const config = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };
    const transporter = await nodemailer.createTransport(config);
    const mail = {
      to: payload.to,
      from: 'node-email@gmail.com',
      subject: `[Node Email] - ${payload.subject}`,
      html: payload.html,
    };
    transporter.sendMail(mail);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendMail };
