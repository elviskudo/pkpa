/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const { sequelize } = require('../models');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getUniversity } = require('../utils/university');

const dbModel = db.student;
const userUniv = db.user_universities;
const phaseUniv = db.phase_universities;
const univ = db.universities;

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

const createStudentByAdmin = async (req, res, next) => {
  try {
    const where = {
      user_id: req.body.id,
      phase_university_id: req.body.phase_university_id,
    };
    const qSelect = await userUniv.findOne({
      where,
      include: [{
        model: phaseUniv,
        required: true,
        include: {
          model: univ,
          as: 'university',
          required: true,
        },
      }],
    });
    const data = (JSON.parse(JSON.stringify(qSelect)));
    const { university_id, id } = data.phase_university;
    const qSelect2 = await dbModel.count({ where: { university_id, phase_university_id: id } });
    const d = new Date(data.phase_university.learning_period_start);
    const year = d.getFullYear();
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    const regNo = year + zeroPad(data.phase_university.phase_no, 2)
       + zeroPad(qSelect2 + 1, 4);
    const pData = {
      user_id: req.body.id,
      university_id,
      phase_university_id: req.body.phase_university_id,
      reg_no: regNo,
    };

    const qData = await dbModel.create(pData);
    const newData = {
      id: qData.id,
    };

    return res.send(success('Tambah data berhasil', newData, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getAllData = async (req, res, next) => {
  // let user = await cache.getAsync('user-creator-list');
  // console.log('Data from cache', user);

  // if (user) {
  // eslint-disable-next-line max-len
  //   return res.send(success('User berhasil ditemukan', { source: 'Redis', user: JSON.parse(user) }, res.statusCode));
  // }
  const { phase_id } = req.query;
  let { university_id } = req.query;
  let where = '';
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
    // where = ' where un.id = ?';
  }
  if (university_id) {
    where = ' where un.id = ?';
  }
  if (university_id && phase_id) {
    where = ' where un.id = ? and pu.id = ?';
  }
  try {
    // eslint-disable-next-line max-len
    // const data = await dbModel.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } });
    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
    const query = `select s.id, u.id as user_id, s.reg_no, u.fullname, LPAD(pu.phase_no::text, 2, \'0\') as phase_no, un."name" as univ_name, \'Peserta\' as tipe \
    from student as s
      join users as u on u.id = s.user_id
      join phase_universities as pu on pu.id = s.phase_university_id
      join universities as un on un.id = pu.university_id
      ${where}
    order by s.id`;
    let data = null;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(query, {
        replacements: [university_id, phase_id],
        type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(query, {
        replacements: [university_id, phase_id],
        type: db.sequelize.QueryTypes.SELECT,
      });
      // data = await db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
    }

    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  try {
    const qData = await dbModel.findByPk(req.params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    });
    if (qData != null) {
      return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  // createData,
  // updateData,
  // deleteData,
  getAllData,
  getDataById,
  createStudentByAdmin,
};
