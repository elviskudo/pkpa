const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const path = require('path');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const db = require('../models');

const userRole = db.user_role;
const User = db.users;
const Role = db.roles;
const userDetail = db.user_details;
const Files = db.files;
const sendMailRegister = require('../utils/mailer_register');

exports.register = async (req, res) => {
  // eslint-disable-next-line max-len
  const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }

  console.log(obj); // { title: 'product' }

  try {
    await db.sequelize.transaction(async (t) => {
      const user = await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        phone_no: req.body.phone_no,
        wa_no: req.body.wa_no,
        image_url: req.body.photo,
        password: bcrypt.hashSync(req.body.password, 8),
      }, { transaction: t });

      // eslint-disable-next-line implicit-arrow-linebreak
      await userRole.create({ user_id: user.id, role_id: 3 }, { transaction: t });
      await userDetail.create({
        user_id: user.id,
        gender: req.body.gender,
        born_place: req.body.born_place,
        born_date: req.body.born_date,
        address: req.body.address,
        rt: req.body.rt,
        rw: req.body.rw,
        village: req.body.village,
        district_id: req.body.district_id,
        city_id: req.body.city_id,
        state_id: req.body.state_id,
        country_id: req.body.country_id,
        zip_code: req.body.zip_code,
        university: req.body.university,
        accreditation: req.body.accreditation,
        ipk: req.body.ipk,
        is_work: req.body.is_work,
      }, { transaction: t });
      const streamUpload = (file) => new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          // eslint-disable-next-line no-shadow
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          },
        );

        streamifier.createReadStream(file.buffer).pipe(stream);
      });
      if (req.files.cv) {
        const resultCV = await streamUpload(req.files.cv[0]);
        await Files.create({
          user_id: user.id, name: 'cv', module: 'user-registration', type: req.files.cv[0].mimetype, url: resultCV.url, status: 'waiting',
        }, { transaction: t });
      }
      if (req.files.ktp) {
        const resultKTP = await streamUpload(req.files.ktp[0]);
        await Files.create({
          user_id: user.id, name: 'ktp', module: 'user-registration', type: req.files.ktp[0].mimetype, url: resultKTP.url, status: 'waiting',
        }, { transaction: t });
      }
      if (req.files.foto) {
        const resultFoto = await streamUpload(req.files.foto[0]);
        await Files.create({
          user_id: user.id, name: 'foto', module: 'user-registration', type: req.files.foto[0].mimetype, url: resultFoto.url, status: 'waiting',
        }, { transaction: t });
      }
      if (req.files.ijazah) {
        const resultIjazah = await streamUpload(req.files.ijazah[0]);
        await Files.create({
          user_id: user.id, name: 'ijazah', module: 'user-registration', type: req.files.ijazah[0].mimetype, url: resultIjazah.url, status: 'waiting',
        }, { transaction: t });
      }
      if (req.files.sertifikat_akreditasi) {
        const resultSertifikatAkreditasi = await streamUpload(req.files.sertifikat_akreditasi[0]);
        await Files.create({
          user_id: user.id, name: 'sertifikat_akreditasi', module: 'user-registration', type: req.files.sertifikat_akreditasi[0].mimetype, url: resultSertifikatAkreditasi.url, status: 'waiting',
        }, { transaction: t });
      }
      const emailPayload = {};
      const io = req.app.get('socketio');
      emailPayload.email = user.email;
      // eslint-disable-next-line max-len
      emailPayload.urlVerify = `${process.env.BASE_URL}/auth/emailVerify/${Buffer.from(user.email).toString('base64')}`;

      sendMailRegister(emailPayload);
      io.on('connection', (socket) => {
        socket.emit('register', 'Berhasil registrasi');
      });
      return res.status(201).send({
        status: 'success',
        message: 'Registrasi berhasil, silakan cek email untuk verifikasi',
        data: {
          userId: user.id,
        },
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
    include: [{
      model: Role,
      as: 'roles',
      attributes: ['id', 'name'],
      required: true,
    }],
  }).then((user) => {
    if (!user) {
      return res.status(404).send({
        status: 'fail',
        message: 'User not found',
      });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password,
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        status: 'fail',
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });
    // console.log(user);
    try {
      // const socketId = [];
      const io = req.app.get('socketio');

      // const nsp = io.of('/login');
      io.on('connection', (socket) => {
        console.log('someone connected');
        socket.emit('hi', 'Hello everyone!');
      });

      // global.io.of('/login').on('connection', (socket) => {
      //   socket.emit('login', 'hello setyo agung');
      // });
    } catch (err) {
      console.log(err);
    }

    return res.send({
      status: 'success',
      message: 'User is found',
      data: {
        id: user.id,
        name: user.name,
        address: user.address,
        photo: 'user.photo',
        email: user.email,
        remidial_to: user.remidial_to,
        pass_exam_pmb: user.pass_exam_pmb,
        // scope: [user.roles[0].name],
        token,
      },
    });
  });
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

    return User.update({ email_verified_at: Date.now(), updated_at: Date.now() }, {
      where: {
        email: decodeEmail,
      },
    }).then((num) => {
      if (num > 0) {
        return res.send({ status: 'success', message: 'Update success' });
      }
      return res.status(404).send({ status: 'fail', message: `Tidak dapat update dengan email=${decodeEmail}` });
    }).catch((err) => res.status(500).send({ status: 'fail', message: err.message }));
  }).catch((err) => res.status(500).send({ status: 'fail', message: err.message }));
};
