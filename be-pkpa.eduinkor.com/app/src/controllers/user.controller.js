/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');

const bcrypt = require('bcryptjs');
const moment = require('moment');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const student = require('../utils/create_noreg');
const sendMailAdmin = require('../utils/email/email_new_admin');
const { upsert } = require('../utils/upsert');
const { getUniversity } = require('../utils/university');

const User = db.users;
const Role = db.roles;
const UserRole = db.user_role;
const UserDetail = db.user_details;
const Files = db.files;
const AdminUniv = db.admin_universities;
const University = db.universities;
const userUniv = db.user_universities;
const PhaseUniv = db.phase_universities;
const TutorCourse = db.tutor_courses;
const Course = db.master_bank_course;
const { Op } = db.Sequelize;

global.id = null;

const createUserAdmin = async (req, res, next) => {
  const {
    fullname,
    email,
    phone_no,
    wa_no,
    university_id,
    role,
    courses,
  } = req.body;
  const password = Math.random().toString(36).slice(-8);
  try {
    const params = {
      fullname,
      email,
      phone_no,
      wa_no,
      university_id,
    };
    const getRole = await Role.findOne({ where: { name: role } });
    params.role_id = getRole.id;
    params.password = bcrypt.hashSync(password);
    const delay = (time) => new Promise((x) => setTimeout(x, time));

    await db.sequelize.transaction(async (t) => {
      const user = await User.create(params, { transaction: t });
      console.log(`===============${user.id}===================`);
      params.user_id = user.id;
      await UserDetail.create(params, { transaction: t });
      await UserRole.create(params, { transaction: t });
      const au = await AdminUniv.create(params, { transaction: t });
      console.log(`===============${au.id}===================`);
      await delay(1000);

      if (courses) {
        const pDetail = JSON.parse(courses);
        const arrNewItem = [];
        // for (let index = 0; index < pDetail.length; index++) {
        //   const newItem = {
        //     admin_univ_id: au.id,
        //     course_id: pDetail[index].matakuliah_id,
        //   };
        //   arrNewItem.push(newItem);
        // }
        pDetail.forEach((element) => {
          const newItem = {
            admin_univ_id: au.id,
            course_id: element.matakuliah_id,
          };
          arrNewItem.push(newItem);
        });
        console.log(arrNewItem);
        await TutorCourse.bulkCreate(
          arrNewItem,
          { transaction: t },
        );
      }
      const newUser = {
        id: user.id,
      };
      // sending email
      const emailPayload = {
        email,
        fullname,
        password,
        url: `${process.env.BASE_URL_TARGET}/login`,
      };
      sendMailAdmin.createMail(emailPayload);
      return res.send(success('Tambah user berhasil', newUser, res.statusCode));
    });
  } catch (err) {
    console.log(err);
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
      return res.send(error(err.errors.map((e) => e.message)));
    }
    next(err);
  }
};

const createUserByAdmin = async (req, res, next) => {
  const { phase_university_id } = req.body;
  const password = Math.random().toString(36).slice(-8);
  try {
    const phaseUniv = await PhaseUniv.findOne({ where: { id: phase_university_id, is_active: true, status: 'Daftar' } });
    if (!phaseUniv) {
      return res.send(error('Gelombang tidak ditemukan atau telah ditutup', req.body, res.statusCode));
    }
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
        password: bcrypt.hashSync(password),
      }, { transaction: t });

      await UserRole.create({ user_id: user.id, role_id: 3 }, { transaction: t });
      const pUserDetail = {
        user_id: user.id,
        gender: req.body.gender,
        born_place: req.body.born_place,
        address: req.body.address,
        village: req.body.village,
        // district_id: req.body.district_id,
        // city_id: req.body.city_id,
        // state_id: req.body.state_id,
        // country_id: req.body.country_id,
        zip_code: req.body.zip_code,
        university: req.body.university,
        accreditation: req.body.accreditation,
        // ipk: req.body.ipk,
        is_work: req.body.is_work,
      };
      if (req.body.born_date) {
        pUserDetail.born_date = req.body.born_date;
      }
      if (req.body.rt) {
        pUserDetail.rt = req.body.rt;
      }
      if (req.body.rw) {
        pUserDetail.rw = req.body.rw;
      }
      if (!req.body.state_id) {
        pUserDetail.state_id = req.body.state_id;
      }
      if (req.body.ipk) {
        pUserDetail.ipk = req.body.ipk;
      }
      // console.log(pUserDetail);
      await UserDetail.create(pUserDetail, { transaction: t });
      // console.log(req.files);
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

      const newData = {
        user_id: user.id,
        phase_university_id: req.body.phase_university_id,
        status: 'paid',
      };
      // console.log(newData);
      await userUniv.create(newData, { transaction: t });
      global.id = user.id;
    });
    const pStudent = {
      user_id: global.id,
      phase_university_id,
    };
    console.log(pStudent);
    const check = await student.createStudent(pStudent);
    console.log(check);
    if (check) {
      return res.status(201).send({
        status: 'success',
        message: 'Create User Berhasil',
        data: {
          userId: global.id,
        },
      });
    }
    return res.status(201).send({
      status: 'success',
      message: 'Create User Berhasil tapi create student gagal',
      data: pStudent,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const createRegistrantByAdmin = async (req, res, next) => {
  const { phase_university_id } = req.body;
  const password = Math.random().toString(36).slice(-8);
  try {
    const phaseUniv = await PhaseUniv.findOne({ where: { id: phase_university_id, is_active: true, status: 'Daftar' } });
    if (!phaseUniv) {
      return res.send(error('Gelombang tidak ditemukan atau telah ditutup', req.body, res.statusCode));
    }
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
        password: bcrypt.hashSync(password),
      }, { transaction: t });

      await UserRole.create({ user_id: user.id, role_id: 3 }, { transaction: t });
      const pUserDetail = {
        user_id: user.id,
        gender: req.body.gender,
        born_place: req.body.born_place,
        address: req.body.address,
        village: req.body.village,
        // district_id: req.body.district_id,
        // city_id: req.body.city_id,
        // state_id: req.body.state_id,
        // country_id: req.body.country_id,
        zip_code: req.body.zip_code,
        university: req.body.university,
        accreditation: req.body.accreditation,
        // ipk: req.body.ipk,
        is_work: req.body.is_work,
      };
      if (req.body.born_date) {
        pUserDetail.born_date = req.body.born_date;
      }
      if (req.body.rt) {
        pUserDetail.rt = req.body.rt;
      }
      if (req.body.rw) {
        pUserDetail.rw = req.body.rw;
      }
      if (!req.body.state_id) {
        pUserDetail.state_id = req.body.state_id;
      }
      if (req.body.ipk) {
        pUserDetail.ipk = req.body.ipk;
      }
      // console.log(pUserDetail);
      await UserDetail.create(pUserDetail, { transaction: t });
      // console.log(req.files);
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

      // const newData = {
      //   user_id: user.id,
      //   phase_university_id: req.body.phase_university_id,
      //   status: 'paid',
      // };
      // await userUniv.create(newData, { transaction: t });
      global.id = user.id;
      if (user) {
        return res.status(201).send({
          status: 'success',
          message: 'Create User Berhasil',
          data: {
            userId: global.id,
          },
        });
      }
    });
    // const pStudent = {
    //   user_id: global.id,
    //   phase_university_id,
    // };
    // const check = await student.createStudent(pStudent);
    return res.send(error('create user failed', res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateUserByAdmin = async (req, res, next) => {
  const { id } = req.body;
  try {
    await db.sequelize.transaction(async (t) => {
      if (req.files.foto) {
        req.body.image_url = req.files.foto[0].location;
      }
      const user = await User.update(req.body, {
        where: {
          id,
        },
        transaction: t,
      });

      await UserDetail.update(req.body, { where: { user_id: id }, transaction: t });
      console.log(typeof req.files);
      if (typeof req.files !== 'undefined') {
        if (req.files.cv) {
          console.log('masuk cv');
          const resultCV = req.files.cv[0].location;
          console.log(resultCV);
          await Files.update({
            type: req.files.cv[0].mimetype,
            url: resultCV,
            originalname: req.files.cv[0].originalname,
          }, { where: { user_id: id, name: 'cv' }, transaction: t });
        }
        if (req.files.ktp) {
          const resultKTP = req.files.ktp[0].location;
          await Files.update({
            type: req.files.ktp[0].mimetype,
            url: resultKTP,
            originalname: req.files.ktp[0].originalname,
          }, { where: { user_id: id, name: 'ktp' }, transaction: t });
        }
        if (req.files.foto) {
          await Files.update({
            type: req.files.foto[0].mimetype,
            url: req.files.foto[0].location,
            originalname: req.files.foto[0].originalname,
          }, { where: { user_id: id, name: 'foto' }, transaction: t });
        }
        if (req.files.ijazah) {
          await Files.update({
            type: req.files.ijazah[0].mimetype,
            url: req.files.ijazah[0].location,
            originalname: req.files.ijazah[0].originalname,
          }, { where: { user_id: id, name: 'ijazah' }, transaction: t });
        }
        if (req.files.sertifikat_akreditasi) {
          await Files.update({
            type: req.files.sertifikat_akreditasi[0].mimetype,
            url: req.files.sertifikat_akreditasi[0].location,
            originalname: req.files.sertifikat_akreditasi[0].originalname,
          }, { where: { user_id: id, name: 'sertifikat_akreditasi' }, transaction: t });
        }
      }
      await userUniv.update(req.body, { where: { user_id: id }, transaction: t });
      console.log(user);
    });
    const check = userUniv.update(req.body, { where: { user_id: req.body.id } });
    if (check) {
      return res.status(201).send({
        status: 'success',
        message: 'Create User Berhasil',
        data: {
          userId: global.id,
        },
      });
    }
    return res.status(201).send({
      status: 'success',
      message: 'Create User Berhasil tapi create student gagal',
      data: pStudent,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateUserByUser = async (req, res, next) => {
  const {
    fullname, phone_no, wa_no, email, university, accreditation,
    accreditation_faculty, ipk, state_id, city_id, district_id,
    born_place, born_date, address, gender, rt, rw, village,
  } = req.body;
  // if (state_id == null) {
  //   req.body.state_id = 'null';
  // }
  const params = {};
  if (state_id != null) {
    params.state_id = state_id;
  }
  if (city_id != null) {
    params.city_id = city_id;
  }
  if (district_id != null) {
    params.district_id = district_id;
  }
  params.fullname = fullname;
  params.phone_no = phone_no;
  params.wa_no = wa_no;
  params.email = email;
  params.university = university;
  params.accreditation = accreditation;
  params.accreditation_faculty = accreditation_faculty;
  params.ipk = ipk;
  params.born_place = born_place;
  params.born_date = born_date;
  params.address = address;
  params.gender = gender;
  params.rt = rt;
  params.rw = rw;
  params.village = village;
  console.log(params);
  try {
    await db.sequelize.transaction(async (t) => {
      const id = req.userId;
      if (typeof req.files !== 'undefined') {
        if (req.files.foto) {
          params.image_url = req.files.foto[0].location;
        }
      }
      await User.update(params, {
        where: {
          id,
        },
        transaction: t,
      });

      req.body.user_id = id;
      upsert(UserDetail, { where: { user_id: id } }, params);
      console.log(typeof req.files);
      if (typeof req.files !== 'undefined') {
        if (req.files.cv) {
          const where = { where: { user_id: id, name: 'cv' } };
          const newItem = {
            user_id: id,
            name: 'cv',
            type: req.files.cv[0].mimetype,
            url: req.files.cv[0].location,
            originalname: req.files.cv[0].originalname,
            status: 'waiting',
            module: 'user-registration',
          };
          // eslint-disable-next-line no-use-before-define
          upsert(Files, where, newItem);
        }
        if (req.files.ktp) {
          const where = { where: { user_id: id, name: 'ktp' } };
          const newItem = {
            user_id: id,
            name: 'ktp',
            type: req.files.ktp[0].mimetype,
            url: req.files.ktp[0].location,
            originalname: req.files.ktp[0].originalname,
            status: 'waiting',
            module: 'user-registration',
          };
          // eslint-disable-next-line no-use-before-define
          upsert(Files, where, newItem);
        }
        if (req.files.foto) {
          const where = { where: { user_id: id, name: 'foto' } };
          const newItem = {
            user_id: id,
            name: 'foto',
            type: req.files.foto[0].mimetype,
            url: req.files.foto[0].location,
            originalname: req.files.foto[0].originalname,
            status: 'waiting',
            module: 'user-registration',
          };
          // eslint-disable-next-line no-use-before-define
          upsert(Files, where, newItem);
        }
        if (req.files.ijazah) {
          const where = { where: { user_id: id, name: 'ijazah' } };
          const newItem = {
            user_id: id,
            name: 'ijazah',
            type: req.files.ijazah[0].mimetype,
            url: req.files.ijazah[0].location,
            originalname: req.files.ijazah[0].originalname,
            status: 'waiting',
            module: 'user-registration',
          };
          // eslint-disable-next-line no-use-before-define
          upsert(Files, where, newItem);
        }
        if (req.files.sertifikat_akreditasi) {
          const where = { where: { user_id: id, name: 'sertifikat_akreditasi' } };
          const newItem = {
            user_id: id,
            name: 'sertifikat_akreditasi',
            type: req.files.sertifikat_akreditasi[0].mimetype,
            url: req.files.sertifikat_akreditasi[0].location,
            originalname: req.files.sertifikat_akreditasi[0].originalname,
            status: 'waiting',
            module: 'user-registration',
          };
          // eslint-disable-next-line no-use-before-define
          upsert(Files, where, newItem);
        }
      }
      const m = moment();
      const io = req.app.get('socketio');

      io.on('connection', (socket) => {
        // console.log(`someone connected-${socket.id}`);
        // socket.emit('hi', 'Hello everyone!');
        io.to(socket.id).emit('user', `Update User Berhasil-${m.utc().format('DD MMMM YYYY, h:mm:ss a')}`);
      });

      return res.send(success('Update user berhasil', { userId: req.userId }, res.statusCode));
    });
  } catch (err) {
    // console.log(err);
    // next(err);
    console.log(err);
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
      return res.send(error(err.errors.map((e) => e.message), '200'));
    }
    next(err);
  }
};

const updateUserById = async (req, res, next) => {
  try {
    await db.sequelize.transaction(async (t) => {
      const { id } = req.params;
      if (typeof req.files !== 'undefined') {
        if (req.files.foto) {
          req.body.image_url = req.files.foto[0].location;
        }
      }
      const user = await User.update(req.body, {
        where: {
          id,
        },
        transaction: t,
      });

      await UserDetail.update(req.body, { where: { user_id: id }, transaction: t });
      console.log(typeof req.files);
      if (typeof req.files !== 'undefined') {
        if (req.files.cv) {
          console.log('masuk cv');
          const resultCV = req.files.cv[0].location;
          console.log(resultCV);
          await Files.update({
            type: req.files.cv[0].mimetype,
            url: resultCV,
            originalname: req.files.cv[0].originalname,
          }, { where: { user_id: id, name: 'cv' }, transaction: t });
        }
        if (req.files.ktp) {
          const resultKTP = req.files.ktp[0].location;
          await Files.update({
            type: req.files.ktp[0].mimetype,
            url: resultKTP,
            originalname: req.files.ktp[0].originalname,
          }, { where: { user_id: id, name: 'ktp' }, transaction: t });
        }
        if (req.files.foto) {
          await Files.update({
            type: req.files.foto[0].mimetype,
            url: req.files.foto[0].location,
            originalname: req.files.foto[0].originalname,
          }, { where: { user_id: id, name: 'foto' }, transaction: t });
        }
        if (req.files.ijazah) {
          await Files.update({
            type: req.files.ijazah[0].mimetype,
            url: req.files.ijazah[0].location,
            originalname: req.files.ijazah[0].originalname,
          }, { where: { user_id: id, name: 'ijazah' }, transaction: t });
        }
        if (req.files.sertifikat_akreditasi) {
          await Files.update({
            type: req.files.sertifikat_akreditasi[0].mimetype,
            url: req.files.sertifikat_akreditasi[0].location,
            originalname: req.files.sertifikat_akreditasi[0].originalname,
          }, { where: { user_id: id, name: 'sertifikat_akreditasi' }, transaction: t });
        }
      }

      if (user) {
        return res.send(success('Update user berhasil', { userId: req.params.id }, res.statusCode));
      }
      return res.status(404).send(error('Update user gagal. User tidak ditemukan', res.statusCode, true));
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
const updateAdminUniv = async (req, res, next) => {
  const {
    fullname, email, phone_no, wa_no, password, university_id, courses,
  } = req.body;
  const { id } = req.params;
  try {
    await db.sequelize.transaction(async (t) => {
      const data = {
        fullname,
        email,
        phone_no,
        wa_no,
      };
      if (password) {
        data.password = bcrypt.hashSync(req.body.password, 8);
      }
      console.log(data);
      const user = await User.update(data, {
        where: {
          id,
        },
        transaction: t,
      });
      await AdminUniv.update({ university_id },
        { where: { user_id: id }, transaction: t });

      if (courses) {
        const admin = await AdminUniv.findOne({ where: { user_id: id } });
        // delete first
        await db.sequelize.query('delete from tutor_courses where admin_univ_id = ? ', {
          replacements: [admin.id], type: db.sequelize.QueryTypes.SELECT, transaction: t,
        });
        const pDetail = JSON.parse(courses);
        const arrNewItem = [];
        pDetail.forEach((element) => {
          const newItem = {
            admin_univ_id: admin.id,
            course_id: element.course_id,
          };
          arrNewItem.push(newItem);
        });
        // const arrDelete = [];
        // pDetail.forEach((element) => {
        //   arrDelete.push(element.matakuliah_id);
        // });
        // console.log(arrDelete);
        // const test = await TutorCourse.destroy({ where: { matakuliah_id: arrDelete } });
        // console.log(test);
        // Model.destroy({ where: { id: [1,2,3,4] }})
        TutorCourse.bulkCreate(arrNewItem);
      }
      if (user) {
        return res.send(success('Update user berhasil', { userId: req.userId }, res.statusCode));
      }
      return res.send(error('Update user gagal. User tidak ditemukan', res.statusCode, true));
    });
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user > 0) {
      return res.send(success('Hapus user berhasil', { idUser: req.params.id }, res.statusCode));
    }
    return res.status(404).send(error('Hapus user gagal. User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getAllUser = async (req, res, next) => {
  let user = await cache.getAsync('user-creator-list');
  console.log('Data from cache', user);

  if (user) {
    return res.send(success('User berhasil ditemukan', { source: 'Redis', user: JSON.parse(user) }, res.statusCode));
  }
  try {
    user = await User.findAll({
      where: { role: 'creator' }, attributes: { exclude: ['password'] },
    });
    const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    console.log(cacheResponse);
    return res.send(success('User berhasil ditemukan', { source: 'Database', user }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getUserTutor = async (req, res, next) => {
  let { university_id } = req.query;
  const { user_id } = req.query;
  console.log(user_id);
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  let query = `select distinct u.id, u.fullname, u.email, un.name as university_name,
  u.phone_no, u.wa_no, un.id as university_id,au.user_id 
      from users u
      join admin_universities au on au.user_id = u.id
      join universities un on un.id = au.university_id
      join user_role ur on ur.user_id = u.id
      join tutor_courses tc on au.id = tc.admin_univ_id
      join master_bank_course mbc on tc.course_id = mbc.id
      where ur.role_id = :role_id `;
  let data = [];
  let courses = [];
  try {
    if (university_id) {
      query += ' and un.id = :university_id order by u.fullname';
      data = await db.sequelize.query(query,
        { replacements: { role_id: 4, university_id }, type: db.sequelize.QueryTypes.SELECT });
    } else if (user_id) {
      query += ' and u.id = :user_id order by u.fullname';
      data = await db.sequelize.query(query,
        { replacements: { role_id: 4, user_id }, type: db.sequelize.QueryTypes.SELECT });
      console.log(data);
      courses = await AdminUniv.findAll({
        where: {
          user_id,
        },
        include: [{
          model: Course,
          as: 'tc',
          attributes: ['id', 'name'],
          required: true,
        }],
        attributes: [],
      });
      console.log(courses);
      console.log(JSON.stringify(courses));
      // eslint-disable-next-line prefer-destructuring
      data[0].courses = courses[0].tc;
      console.log(data);
    } else {
      query += 'order by u.fullname';
      data = await db.sequelize.query(query,
        { replacements: { role_id: 4 }, type: db.sequelize.QueryTypes.SELECT });
    }
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getUserDewanPanelis = async (req, res, next) => {
  try {
    const query = 'select u.id, au.university_id, u.fullname, u.email, un.name \
    from users u \
      join admin_universities au on au.user_id=u.id \
      join user_role ur on ur.user_id=u.id \
      join universities un on un.id = au.university_id \
    where ur.role_id = :role_id \
    order by u.fullname;';
    const data = await db.sequelize.query(
      query, { replacements: { role_id: 5 }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const query = 'select u.id, u.fullname, u.email, u.phone_no, u.wa_no, ud.born_place, ud.born_date, ud.gender, s.id as state_id, s.name as state_name, c.id as city_id, c."name" as city_name, d.id as district_id, d."name" as district_name, ud.rt, ud.rw, ud.village, ud.address, ud.university, ud.accreditation, ud.ipk \
    ,f.id as file_id, f.type as file_type, f.name as file_name, f.url as file_url, f.status as file_status, f.originalname as file_originalname, un.name as name_univ, un.id as id_univ, uu.phase_university_id, pu.phase_no, ud.accreditation_faculty, au.university_id \
    from users u \
      left join user_details ud on ud.user_id = u.id \
      left join states s on ud.state_id = s.id \
      left join cities c on ud.city_id = c.id \
      left join districts d on ud.district_id = d.id \
      left join files f on f.user_id = u.id \
      left join user_universities uu on u.id=uu.user_id \
      left join phase_universities pu on uu.phase_university_id = pu.id \
      left join universities un on un.id=pu.university_id \
      left join admin_universities au on au.user_id=u.id \
    where u.id = :user_id \
    order by f.name;';
    const data = await db.sequelize.query(
      query, { replacements: { user_id: req.params.id }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserByUser = async (req, res, next) => {
  try {
    const query = 'select u.id, u.fullname, u.email, u.phone_no, u.wa_no, ud.born_place, ud.born_date, ud.gender, s.id as state_id, s.name as state_name, c.id as city_id, c."name" as city_name, d.id as district_id, d."name" as district_name, ud.rt, ud.rw, ud.village, ud.address, ud.university, ud.accreditation, ud.ipk \
    ,f.id as file_id, f.name as file_name, f.type as file_type, f.originalname as file_originalname, f.url as file_url, f.status as file_status, un.name as name_univ, un.id as id_univ \
    from users u \
      left join user_details ud on ud.user_id = u.id \
      left join states s on ud.state_id = s.id \
      left join cities c on ud.city_id = c.id \
      left join districts d on ud.district_id = d.id \
      left join files f on f.user_id = u.id \
      left join user_universities uu on u.id=uu.user_id \
      left join phase_universities pu on uu.phase_university_id = pu.id \
      left join universities un on un.id=pu.university_id \
    where u.id = :user_id \
    order by f.name;';
    const data = await db.sequelize.query(
      query, { replacements: { user_id: req.userId }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Role,
          as: 'roles',
          required: true,
          attributes: ['id', 'name'],
        },
      ],
    });
    const status = await db.sequelize.query('select exists (select 1 from user_universities uu where user_id = :user_id and status = \'paid\') as status;',
      { replacements: { user_id: req.userId }, type: db.sequelize.QueryTypes.SELECT });

    const scope = [user.roles[0].name];
    if (status[0].status) {
      scope.push('useractive');
    }

    const phase = await db.sequelize.query('select * from user_universities where user_id = :user_id',
      { replacements: { user_id: req.userId }, type: db.sequelize.QueryTypes.SELECT });

    let university_id;
    if (req.roleName === 'admin') {
      university_id = await getUniversity(req.userId);
    }

    if (user != null) {
      const data = {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        phone_no: user.phone_no,
        wa_no: user.wa_no,
        image_url: user.image_url,
        scope,
        remidial_to: user.remidial_to,
        pass_exam_pmb: user.pass_exam_pmb,
        status: status[0].status,
        phase,
        university_id,
      };
      return res.send(success('User berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getStatusFileUser = async (req, res, next) => {
  try {
    const result = await db.sequelize.query('select count(1) as cnt\
          from users u \
            join files f on f.user_id = u.id \
          where u.id = :id and f.status = \'verified\'; \
        ', { replacements: { id: req.userId }, type: db.sequelize.QueryTypes.SELECT });
    console.log(result[0].cnt);
    if (result[0].cnt != null) {
      let data;
      if ((result[0].cnt) >= '4') {
        data = {
          id: req.userId,
          status_file: 'verified',
        };
      } else {
        data = {
          id: req.userId,
          status_file: 'not verified',
        };
      }
      return res.send(success('User berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const updateRemidialUser = async (req, res, next) => {
  try {
    const newData = {
      remidial_to: req.body.remidial_to,
      pass_exam_pmb: req.body.pass_exam_pmb,
    };
    const data = await User.update(newData, { where: { id: req.userId } });
    if (data > 0) {
      return res.send(success('Update remidi user berhasil', { idUser: req.userId }, res.statusCode));
    }
    return res.status(404).send(error('Update remidi user gagal. User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserAdminUniv = async (req, res, next) => {
  let university_id;
  try {
    let user;
    if (req.roleName === 'admin') {
      university_id = await getUniversity(req.userId);
      user = await User.findAll({
        include: [
          {
            model: Role,
            as: 'roles',
            required: true,
            attributes: ['id', 'name'],
            through: { attributes: [] },
          },
          {
            model: University,
            as: 'admin_univ',
            required: true,
            where: { id: university_id },
            through: { attributes: [] },
            attributes: ['id', 'name', 'slug'],
          },
        ],
        attributes: ['id', 'fullname', 'email', 'phone_no'],
        where: {
          '$roles.name$': 'admin',
        },
      });
    } else {
      user = await User.findAll({
        include: [
          {
            model: Role,
            as: 'roles',
            required: true,
            attributes: ['id', 'name'],
            through: { attributes: [] },
          },
          {
            model: University,
            as: 'admin_univ',
            required: true,
            through: { attributes: [] },
            attributes: ['id', 'name', 'slug'],
          },
        ],
        attributes: ['id', 'fullname', 'email', 'phone_no'],
        where: {
          '$roles.name$': 'admin',
        },
      });
    }

    if (user != null) {
      return res.send(success('User berhasil ditemukan', user, res.statusCode));
    }
    return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getStatusPaidUser = async (req, res, next) => {
  try {
    const status = await db.sequelize.query('select exists (select 1 from user_universities uu where user_id = :user_id and status = \'paid\') as status;',
      { replacements: { user_id: req.userId }, type: db.sequelize.QueryTypes.SELECT });
    const data = {
      status: status[0].status,
    };
    return res.send(success('Status user berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getChangePassByUser = async (req, res, next) => {
  try {
    const query = 'select u.id, u.password\
    from users u \
    where u.id = :user_id \
    order by u.id;';
    const data = await db.sequelize.query(
      query, { replacements: { user_id: req.userId }, type: db.sequelize.QueryTypes.SELECT },
    );
    // console.log(data[0].password);
    // caompare password
    const passwordIsValid = bcrypt.compareSync(
      req.body.passold, // password lama
      data[0].password,
    );
    console.log(passwordIsValid);
    // method untuk update password
    if (passwordIsValid === true) {
      const datax = await User.update({ password: bcrypt.hashSync(req.body.passconfirm, 8) },
        { where: { id: req.userId } });

      if (datax != null) {
        return res.send(success('Password berhasil disimpan', data, res.statusCode));
      }
      return res.status(404).send(error('Password gagal disimpan', res.statusCode, true));
    }
    return res.status(404).send(error('Password gagal disimpan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUnivercityByUser = async (req, res, next) => {
  try {
    const query = 'select u.id, ud.address, ud.university, ud.accreditation, ud.ipk \
    ,ud.accreditation_faculty \
    from users u \
      left join user_details ud on ud.user_id = u.id \
      left join states s on ud.state_id = s.id \
      left join cities c on ud.city_id = c.id \
      left join districts d on ud.district_id = d.id \
      left join files f on f.user_id = u.id \
    where u.id = :user_id \
    order by f.name;';
    const data = await db.sequelize.query(
      query, { replacements: { user_id: req.userId }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserTrxCompleted = async (req, res, next) => {
  let { university_id } = req.query;
  let qUniv = '';
  let data = '';
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }

  if (university_id) {
    qUniv = ' and u.id = ?';
  }
  try {
    const query = `select row_number() over(order by pu.university_id) as no,
    pu.university_id,u."name",sum(tp.amount) as total_pembayaran,count(tp.user_id) as total_peserta
    from trx_payment tp
    join phase_universities pu on tp.phase_university_id = pu.id
    join universities u on u.id = pu.university_id
    where tp.status='COMPLETED' ${qUniv}
    group by pu.university_id,u."name"`;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(query, {
        replacements: [university_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(
        query, { type: db.sequelize.QueryTypes.SELECT },
      );
    }
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserTrxPending = async (req, res, next) => {
  let { university_id } = req.query;
  let qUniv = '';
  let data = '';
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }

  if (university_id) {
    qUniv = ' and u.id = ?';
  }
  // console.log(qUniv);
  try {
    const query = `select row_number() over(order by pu.university_id) as no,
    pu.university_id,u."name",sum(tp.amount) as total_pembayaran,count(tp.user_id) as total_peserta
    from trx_payment tp
    join phase_universities pu on tp.phase_university_id = pu.id
    join universities u on u.id = pu.university_id
    where tp.status='PENDING' ${qUniv}
    group by pu.university_id,u."name"`;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(query, {
        replacements: [university_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(
        query, { type: db.sequelize.QueryTypes.SELECT },
      );
    }
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserTrxViewCompleted = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = 'select row_number() over(order by pu.university_id) as no, \
    u.id,tp.invoice,u.fullname,un."name" as univeristas,tp.amount, \
    mb."name",tp.status,un.id as id_univ, \'PKPA\' as nama_program, tp.created_at \
    from users u \
    join trx_payment tp on u.id = tp.user_id \
    join master_bank mb on tp.bank_id = mb.id \
    join phase_universities pu on tp.phase_university_id = pu.id \
    join universities un on un.id = pu.university_id \
    where tp.status=\'COMPLETED\' and un.id = :id_univ';
    const data = await db.sequelize.query(
      query, { replacements: { id_univ: id }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserTrxViewPending = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = 'select row_number() over(order by pu.university_id) as no, \
    u.id,tp.invoice,u.fullname,un."name" as univeristas,tp.amount, \
    mb."name",tp.status,un.id as id_univ, \'PKPA\' as nama_program, tp.created_at \
    from users u \
    join trx_payment tp on u.id = tp.user_id \
    join master_bank mb on tp.bank_id = mb.id \
    join phase_universities pu on tp.phase_university_id = pu.id \
    join universities un on un.id = pu.university_id \
    where tp.status=\'PENDING\' and un.id = :id_univ';
    const data = await db.sequelize.query(
      query, { replacements: { id_univ: id }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getUserTrxDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = 'select row_number() over(order by pu.university_id) as no, \
    u.id,tp.invoice,u.fullname,un."name" as univeristas,tp.amount, \
    mb."name",tp.status,un.id as id_univ, \'PKPA\' as nama_program, tp.created_at,tp.status \
    from users u \
    join trx_payment tp on u.id = tp.user_id \
    join master_bank mb on tp.bank_id = mb.id \
    join phase_universities pu on tp.phase_university_id = pu.id \
    join universities un on un.id = pu.university_id \
    where u.id = :id';
    const data = await db.sequelize.query(
      query, { replacements: { id }, type: db.sequelize.QueryTypes.SELECT },
    );
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUserAdmin,
  updateUserById,
  deleteUser,
  getAllUser,
  getUserById,
  getUser,
  getStatusFileUser,
  updateRemidialUser,
  getUserAdminUniv,
  getStatusPaidUser,
  updateUserByUser,
  getUserByUser,
  getChangePassByUser,
  getUnivercityByUser,
  createUserByAdmin,
  createRegistrantByAdmin,
  updateUserByAdmin,
  updateAdminUniv,
  getUserTutor,
  getUserDewanPanelis,
  getUserTrxCompleted,
  getUserTrxViewCompleted,
  getUserTrxPending,
  getUserTrxViewPending,
  getUserTrxDetail,
};
