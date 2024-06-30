/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { upsert } = require('../utils/upsert');
const { getStudent } = require('../utils/student');
const { getUniversity } = require('../utils/university');

const { success, error } = require('../utils/response-api');

const dbModel = db.user_live_streaming;
const LiveStreaming = db.live_streaming;
const User = db.users;
const Student = db.student;
const Course = db.master_bank_course;
const Phase = db.phase_universities;
const University = db.universities;

// const createData = async (req, res, next) => {
//   const { live_streaming_id } = req.body;
//   const id = req.userId;
//   try {
//     const student_id = await getStudent(id);
//     const pData = {
//       student_id,
//       live_streaming_id,
//       // presence: new Date(),
//     };
//     if (typeof req.files !== 'undefined') {
//       if (req.files.screenshot) {
//         pData.screenshot = req.files.screenshot[0].location;
//         pData.originalname = req.files.screenshot[0].originalname;
//       }
//     }

//     const qData = await dbModel.create(pData);
//     const newData = {
//       id: qData.id,
//     };

//     return res.send(success('Tambah data berhasil', newData, res.statusCode));
//   } catch (err) {
//     next(err);
//   }
// };

// const updateData = async (req, res, next) => {
//   const { live_streaming_id } = req.body;
//   const id = req.userId;
//   try {
//     const student_id = await getStudent(id);
//     const pData = {
//       student_id,
//       live_streaming_id,
//     };
//     if (typeof req.files !== 'undefined') {
//       if (req.files.screenshot) {
//         pData.screenshot = req.files.screenshot[0].location;
//         pData.originalname = req.files.screenshot[0].originalname;
//       }
//     }
//     const qData = await dbModel.update(pData, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (qData > 0) {
//       return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
//     }
//     return res.status(404).send(error('Update data gagal', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

const updateOrCreateData = async (req, res, next) => {
  const { live_streaming_id } = req.body;
  const id = req.userId;
  try {
    const student_id = await getStudent(id);
    const pData = {
      student_id,
      live_streaming_id,
    };
    if (typeof req.files !== 'undefined') {
      if (req.files.screenshot) {
        pData.screenshot = req.files.screenshot[0].location;
        pData.originalname = req.files.screenshot[0].originalname;
      }
    }
    // insert or update
    const where = {
      live_streaming_id,
      student_id,
    };
    const result = upsert(dbModel, { where }, pData);
    console.log(result);
    return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
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
    let data;
    if (req.roleName === 'admin') {
      const university_id = await getUniversity(req.userId);
      data = await dbModel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [
          {
            model: Student,
            required: true,
            include: [
              {
                model: User,
                as: 'student',
                required: true,
                attributes: ['fullname'],
                // raw: true,
              },
              {
                model: Phase,
                as: 'pu',
                required: true,
                attributes: ['id'],
                where: {
                  university_id,
                },
              },
            ],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
          },
          {
            model: LiveStreaming,
            as: 'user_ls',
            required: true,
            // where: { },
            include: [
              {
                model: Course,
                as: 'courses',
                required: true,
                attributes: ['name'],
              },
              {
                model: Phase,
                as: 'phase',
                required: true,
                attributes: ['name'],
                include: [
                  {
                    model: University,
                    as: 'university',
                    required: true,
                    attributes: ['name'],
                  },
                ],
              },
            ],
          },
        ],
      });
    } else {
      data = await dbModel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [
          {
            model: Student,
            required: true,
            include: [
              {
                model: User,
                as: 'student',
                required: true,
                attributes: ['fullname'],
                // raw: true,
              },
              {
                model: Phase,
                as: 'pu',
                required: true,
                attributes: ['id'],
              },
            ],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
          },
          {
            model: LiveStreaming,
            as: 'user_ls',
            required: true,
            // where: { },
            include: [
              {
                model: Course,
                as: 'courses',
                required: true,
                attributes: ['name'],
              },
              {
                model: Phase,
                as: 'phase',
                required: true,
                attributes: ['name'],
                include: [
                  {
                    model: University,
                    as: 'university',
                    required: true,
                    attributes: ['name'],
                  },
                ],
              },
            ],
          },
        ],
      });
    }

    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
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

// const getDataMonitoringOnlineSession = async (req, res, next) => {
//   try {
//     const data = await dbModel.findAll({
//       attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
//       include: [
//         {
//           model: Course,
//           as: 'courses',
//           required: true,
//           attributes: ['id', 'name'],
//         },
//         {
//           model: UserLiveStreaming,
//           as: 'user_ls',
//         },
//       ],
//     });
//     return res.send(success('Data berhasil ditemukan', data, res.statusCode));
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  // createData,
  // updateData,
  // deleteData,
  getAllData,
  getDataById,
  updateOrCreateData,
  // getDataMonitoringOnlineSession,
};
