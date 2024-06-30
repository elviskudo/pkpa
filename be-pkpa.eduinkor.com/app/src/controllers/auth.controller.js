const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { formatMoment } = require('../utils/format_moment');
const dbModel = require('../models/nosql/notification');
const { getUniversity } = require('../utils/university');

const db = require('../models');

const userRole = db.user_role;
const User = db.users;
const Role = db.roles;
const userDetail = db.user_details;
const Files = db.files;
const MailRegister = require('../utils/email/mailer_register');

exports.register = async (req, res) => {
  console.log(req.body);
  try {
    await db.sequelize.transaction(async (t) => {
      let photo = null;
      if (req.files.foto) {
        photo = req.files.foto[0].location;
      }
      const user = await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        phone_no: req.body.phone_no,
        wa_no: req.body.wa_no,
        image_url: photo,
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
        accreditation_faculty: req.body.accreditation_faculty,
        ipk: req.body.ipk,
        is_work: req.body.is_work,
      }, { transaction: t });
      // console.log(req.files);
      if (typeof req.files !== 'undefined') {
        if (req.files.cv) {
          const resultCV = req.files.cv[0].location;
          console.log(resultCV);
          await Files.create({
            user_id: user.id, name: 'cv', module: 'user-registration', type: req.files.cv[0].mimetype, url: resultCV, status: 'waiting', originalname: req.files.cv[0].originalname,
          }, { transaction: t });
        }
        if (req.files.ktp) {
          const resultKTP = req.files.ktp[0].location;
          await Files.create({
            user_id: user.id, name: 'ktp', module: 'user-registration', type: req.files.ktp[0].mimetype, url: resultKTP, status: 'waiting', originalname: req.files.ktp[0].originalname,
          }, { transaction: t });
        }
        if (req.files.foto) {
          await Files.create({
            user_id: user.id, name: 'foto', module: 'user-registration', type: req.files.foto[0].mimetype, url: req.files.foto[0].location, status: 'waiting', originalname: req.files.foto[0].originalname,
          }, { transaction: t });
        }
        if (req.files.ijazah) {
          await Files.create({
            user_id: user.id, name: 'ijazah', module: 'user-registration', type: req.files.ijazah[0].mimetype, url: req.files.ijazah[0].location, status: 'waiting', originalname: req.files.ijazah[0].originalname,
          }, { transaction: t });
        }
        if (req.files.sertifikat_akreditasi) {
          await Files.create({
            user_id: user.id, name: 'sertifikat_akreditasi', module: 'user-registration', type: req.files.sertifikat_akreditasi[0].mimetype, url: req.files.sertifikat_akreditasi[0].location, status: 'waiting', originalname: req.files.sertifikat_akreditasi[0].originalname,
          }, { transaction: t });
        }
      }
      const emailPayload = {};
      emailPayload.email = user.email;
      emailPayload.fullname = user.fullname;
      emailPayload.url = `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`;
      // eslint-disable-next-line max-len
      // emailPayload.urlVerify = `${process.env.BASE_URL_TARGET}/auth/emailVerify/${Buffer.from(user.email).toString('base64')}`;

      MailRegister.createMail(emailPayload);
      const pData = {
        user_id: user.id,
        title: 'pendaftaran',
        message: 'Pendaftaran berhasil berkas sedang ditinjau',
        url: `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`,
        status: 'success',
        is_read: false,
      };
      try {
        await dbModel.create(pData);
      } catch (err) {
        console.log(err);
      }
      const sData = {};
      const m = Date.now(); // formatMoment();
      const io = req.app.get('socketio');
      io.on('connection', async (socket) => {
        // socket.emit('register', 'Berhasil registrasi');
        sData.socket_id = socket.id;
        sData.message = 'Pendaftaran berhasil berkas sedang ditinjau';
        sData.id = user.id;
        sData.fullname = user.fullname;
        sData.image = user.image_url;
        sData.url = `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`;
        sData.created_at = m; // m.locale('id').format('DD MMMM YYYY, h:mm:ss a');
        // m.utc().format('DD MMMM YYYY, h:mm:ss a');
        console.log(sData);
        io.to(socket.id).emit('user', sData);
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
    // console.log('123');
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
  }).then(async (user) => {
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
    console.log(process.env.TOKEN_LIFE);

    // get university
    let university_id = await getUniversity(user.id);
    console.log('university_id', university_id)

    const token = jwt.sign({
      id: user.id, role_id: user.roles[0].id, role_name: user.roles[0].name, university_id: university_id
    }, process.env.SECRET, {
      expiresIn: 86400, // 86400, // 24 hours
    });
    console.log(`Role : ${user.roles[0].id}`);
    try {
      // update last_login
      console.log(`============================= ${new Date().toLocaleString()} ====================================`);
      await User.update({ last_login: new Date().toLocaleString() }, {
        where: {
          id: user.id,
        },
      });
      const m = formatMoment();
      const io = req.app.get('socketio');
      const sData = {};
      io.on('connection', async (socket) => {
        sData.socket_id = socket.id;
        sData.message = 'Login berhasil';
        sData.id = user.id;
        sData.fullname = user.fullname;
        sData.image = user.image_url;
        sData.created_time = m; // m.locale('id').format('DD MMMM YYYY, h:mm:ss a');
        console.log(sData);
        // io.to(socket.id).emit('user', sData);
        socket.emit('user', sData);
      });
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
