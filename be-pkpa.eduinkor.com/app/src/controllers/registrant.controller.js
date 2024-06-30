/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const { formatMoment } = require('../utils/format_moment');
const notif = require('../models/nosql/notification');
// const { sequelize } = require('../models');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const MailBerkasAccepted = require('../utils/email/berkas_accepted');
const MailBerkasRejected = require('../utils/email/berkas_rejected');
const MailBerkasCorrected = require('../utils/email/berkas_corrected');

const User = db.users;
const dbModel = db.files;

// const createData = async (req, res, next) => {
//   try {
//     const where = {
//       user_id: req.userId,
//       phase_university_id: req.body.phase_university_id,
//     };
//     const qSelect = await userUniv.findOne({
//       where,
//       include: [{
//         model: phaseUniv,
//         required: true,
//         include: {
//           model: univ,
//           as: 'university',
//           required: true,
//         },
//       }],
//     });
//     const data = (JSON.parse(JSON.stringify(qSelect)));
//     const { university_id, id } = data.phase_university;
//     const qSelect2 = await dbModel.count({ where: { university_id, phase_university_id: id } });
//     const d = new Date(data.phase_university.learning_period_start);
//     const year = d.getFullYear();
//     const zeroPad = (num, places) => String(num).padStart(places, '0');
//     const regNo = year + zeroPad(data.phase_university.phase_no, 2)
//        + zeroPad(qSelect2 + 1, 4);
//     const pData = {
//       user_id: req.userId,
//       university_id,
//       phase_university_id: req.body.phase_university_id,
//       reg_no: regNo,
//     };

//     const qData = await dbModel.create(pData);
//     const newData = {
//       id: qData.id,
//     };

//     return res.send(success('Tambah data berhasil', newData, res.statusCode));
//   } catch (err) {
//     next(err);
//   }
// };

const updateDataFile = async (req, res, next) => {
  const { status } = req.body;
  console.log(status);
  try {
    const arrFiles = req.body.files;
    console.log(arrFiles);
    // for (let i = 0; i < arrFiles.length; i++) {
    const qData = await dbModel.update({ status }, { where: { id: arrFiles } });
    // }
    // const pData = {
    //   name: req.body.name,
    //   description: req.body.description,
    //   is_active: req.body.is_active,
    //   owner_id: req.body.owner_id,
    // };
    // const qData = await dbModel.update(pData, {
    //   where: {
    //     id: req.params.id,
    //   },
    // });
    // const qData = 0;
    const user = await dbModel.findAll({
      where: { id: arrFiles[0] },
    });
    const userData = await User.findByPk(user[0].user_id);
    console.log(user[0].user_id);
    const countData = await dbModel.count({ where: { user_id: user[0].user_id, status: 'verified' } });
    console.log('===============================');
    console.log(countData);
    console.log('===============================');
    const emailPayload = {};
    emailPayload.email = userData.email;
    emailPayload.subject = 'Status Berkas Pendaftaran';
    emailPayload.fullname = userData.fullname;
    emailPayload.static_link = process.env.BASE_URL_STATIC;
    if (countData === 4) {
      emailPayload.link = `${process.env.BASE_URL_TARGET}/#university`;
      MailBerkasAccepted.createMail(emailPayload);
    }

    if (qData > 0) {
      let msgStatus = '';
      if (status === 'verified') {
        msgStatus = 'diterima';
      } else if (status === 'rejected') {
        msgStatus = 'ditolak';
        emailPayload.link = `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`;
        MailBerkasRejected.createMail(emailPayload);
      } else if (status === 'corrected') {
        msgStatus = 'perlu perbaikan';
        emailPayload.link = `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`;
        MailBerkasCorrected.createMail(emailPayload);
      }
      const pData = {
        user_id: user[0].user_id,
        title: 'pendaftaran',
        message: `Berkas ${msgStatus}`,
        status: 'success',
        is_read: false,
      };
      console.log(pData);
      try {
        await notif.create(pData);
      } catch (err) {
        console.log(err);
      }
      const io = req.app.get('socketio');
      // console.log(io);
      // const sData = {};
      const m = Date.now(); // formatMoment();
      io.on('connection', (socket) => {
        // console.log(berkas);
        io.emit('user', 'beberekas');
      });
      // Whenever someone disconnects this piece of code executed
      //   socket.on('disconnect', () => {
      //     console.log('A user disconnected: berkas berkas');
      //   });
      // });
      // io.emit('user', { message: `Berkas ${msgStatus}`, url: `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`, created_at: m });
      // io.on('connection', (socket) => {
      //   sData.socket_id = socket.id;
      //   sData.message = `Berkas ${msgStatus}`;
      //   sData.id = user[0].user_id;
      //   // sData.fullname = user.fullname;
      //   // sData.image = user.image_url;
      //   sData.url = `${process.env.BASE_URL_TARGET}/dashboard/setting/upload-doc`;
      //   sData.created_at = m;
      //   console.log(sData);
      //   // io.to(socket.id).emit('user', sData);
      //   socket.emit('user-test', sData);
      //   // socket.broadcast.emit('user', 'hello worrld!!');
      //   // io.emit('user', sData);
      // });
      return res.send(success('Update data berhasil', arrFiles, res.statusCode));
    }
    return res.status(404).send(error('Update data gagal', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

// const deleteData = async (req, res, next) => {
//   try {
//     const qData = await dbModel.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (qData > 0) {
//       return res.send(success('Hapus data berhasil', { id: req.params.id }, res.statusCode));
//     }
//     return res.status(404).send(error('Hapus data gagal', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

const getAllData = async (req, res, next) => {
  // let user = await cache.getAsync('user-creator-list');
  // console.log('Data from cache', user);

  // if (user) {
  // eslint-disable-next-line max-len
  //   return res.send(success('User berhasil ditemukan', { source: 'Redis', user: JSON.parse(user) }, res.statusCode));
  // }
  try {
    const arrNewData = [];
    let newData = {};
    // eslint-disable-next-line max-len
    // const data = await dbModel.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } });
    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
    const query = 'select u.id, u.fullname, u.email, u.phone_no \
    from users u \
      join user_role ur on ur.user_id = u.id \
      join roles r on ur.role_id = r.id \
    where u.id not in (select user_id from student) \
    and r.name = \'user\' \
    order by u.id desc;';
    const data = await db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
    // console.log(data);
    // eslint-disable-next-line no-restricted-syntax
    for (const i of data) {
      // console.log(i.id);
      const query2 = 'select status from files where user_id = :user_id group by user_id, status';
      // eslint-disable-next-line no-await-in-loop
      const data2 = await db.sequelize.query(
        query2, { replacements: { user_id: i.id }, type: db.sequelize.QueryTypes.SELECT },
      );
      const arrStatus = [];
      for (const j of data2) {
        arrStatus.push(j.status);
      }
      newData = {
        id: i.id,
        fullname: i.fullname,
        email: i.email,
        phone_no: i.phone_no,
        status: arrStatus,
      };
      arrNewData.push(newData);
    }
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data: arrNewData }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

// const getDataById = async (req, res, next) => {
//   try {
//     const query = 'select u.id, u.fullname, u.email, u.phone_no, u.wa_no, ud.born_place, ud.born_date, ud.gender, s.id as state_id, s.name as state_name, c.id as city_id, c."name" as city_name, d.id as district_id, d."name" as district_name, ud.rt, ud.rw, ud.address, ud.university, ud.accreditation, ud.ipk \
//     ,f.id as file_id, f.name as file_name, f.url as file_url, f.status as file_status \
//     from users u \
//       left join user_details ud on ud.user_id = u.id \
//       left join states s on ud.state_id = s.id \
//       left join cities c on ud.city_id = c.id \
//       left join districts d on ud.district_id = d.id \
//       left join files f on f.user_id = u.id \
//     where u.id = :user_id \
//     order by f.name;';
//     const data = await db.sequelize.query(
//       query, { replacements: { user_id: req.params.id }, type: db.sequelize.QueryTypes.SELECT },
//     );
//     // const qData = await dbModel.findByPk(req.params.id, {
//     //   attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
//     // });
//     if (data != null) {
//       return res.send(success('Data berhasil ditemukan', data, res.statusCode));
//     }
//     return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  // createData,
  updateDataFile,
  // deleteData,
  getAllData,
  // getDataById,
};
