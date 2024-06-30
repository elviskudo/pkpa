/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const User = db.users;
const QuestionType = db.master_question_pmb_type;
const Score = db.master_score_pmb;
const Question = db.master_question_pmb;
const ResultScore = db.result_score_pmb;

const createQuestion = async (req, res, next) => {
  try {
    const data = {
      question_pmb_type_id: req.body.question_pmb_type_id,
      name: req.body.name,
      is_active: req.body.is_active,
      owner_id: req.userId,
    };
    console.log(data);
    const createData = await Question.create(data);
    const newData = {
      id: createData.id,
    };
    return res.send(success('Tambah question berhasil', newData, res.statusCode));
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

// const updateUser = async (req, res, next) => {
//   try {
//     const user = await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (user > 0) {
//       return res.send(success('Update user berhasil', { idUser: req.params.id }, res.statusCode));
//     }
//     return res.status(404).send(error('Update user gagal. User tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

// const deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (user > 0) {
//       return res.send(success('Hapus user berhasil', { idUser: req.params.id }, res.statusCode));
//     }
//     return res.status(404).send(error('Hapus user gagal. User tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

// const getAllUser = async (req, res, next) => {
//   let user = await cache.getAsync('user-creator-list');
//   console.log('Data from cache', user);

//   if (user) {
//     return res.send(success('User berhasil ditemukan', { source: 'Redis', user: JSON.parse(user) }, res.statusCode));
//   }
//   try {
//     user = await User.findAll({
//       where: { role: 'creator' }, attributes: { exclude: ['password'] },
//     });
//     const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
//     console.log(cacheResponse);
//     return res.send(success('User berhasil ditemukan', { source: 'Database', user }, res.statusCode));
//   } catch (err) {
//     next(err);
//   }
// };
const createAnswer = async (req, res, next) => {
  try {
    const data = {
      user_id: req.userId,
      question_pmb_id: req.body.question_pmb_id,
      value_answer: req.body.value_answer,
      remidial_no: req.body.remidial_no,
    };
    const where = {
      user_id: req.userId,
      question_pmb_id: req.body.question_pmb_id,
      remidial_no: req.body.remidial_no,
    };
    const foundItem = await ResultScore.findOne({ where });
    if (!foundItem) {
      // Item not found, create a new one
      const item = await ResultScore.create(data);
      const newData = {
        id: item.id,
      };
      return res.send(success('Tambah answer berhasil', newData, res.statusCode));
    }
    // Found an item, update it
    const item = await ResultScore.update(data, { where });
    const newData = {
      id: item.id,
    };
    return res.send(success('Update answer berhasil', newData, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getAllAnswer = async (req, res, next) => {
  try {
    const data = await Question.findAll({
      // where: {
      //   id: req.userId,
      // },
      attributes: ['id', 'name'],
      order: [
        ['id', 'ASC'],
      ],
      include: [
        {
          model: ResultScore,
          as: 'result_score',
          required: false,
          where: { user_id: req.userId, remidial_no: req.params.remidial },
          attributes: ['value_answer'],
        },
      ],
    });
    return res.send(success('Answer berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getResultExamPMBById = async (req, res, next) => {
  if (req.params.remidial > 3) {
    return res.status(404).send(error('Remidial Maximal 3', res.statusCode, true));
  }
  try {
    const resultSql2 = await db.sequelize.query('select count(1) as total from master_question_pmb mqp where is_active is true;',
      { type: db.sequelize.QueryTypes.SELECT });
    const resultSql = await db.sequelize.query('select count(1) as score \
    from result_score_pmb rsp \
       join master_score_pmb msp on rsp.value_answer = msp.id \
    where msp.value = 1 and rsp.user_id = ? and remidial_no= ?; \
    ', { replacements: [req.userId, req.params.remidial], type: db.sequelize.QueryTypes.SELECT });

    const totalScore = (resultSql[0].score * 100) / resultSql2[0].total;
    const status = totalScore >= 60;
    // const dataUser = {
    //   remidial_to: req.params.remidial,
    //   pass_exam_pmb: status,
    // };

    // update users
    // const updateUser = await User.update(dataUser, { where: { id: req.userId } });
    // if (updateUser > 0) {
    const data = {
      total_question: resultSql2[0].total,
      total_answer: resultSql[0].score,
      total_score: totalScore,
      status,
    };
    return res.send(success('Nilai ujian PMB', data, res.statusCode));
    // }
    // eslint-disable-next-line max-len
    // return res.status(404).send(error('Update user gagal. User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getRemidialTo = async (req, res, next) => {
  try {
    const data = await User.findOne({
      where: { id: req.userId },
      attributes: ['id', 'remidial_to', 'pass_exam_pmb'],
    });

    return res.send(success('Remidial Ke', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getQuestionById = async (req, res, next) => {
  try {
    const data = await Question.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['id', 'name'],
      include: [
        {
          model: QuestionType,
          as: 'question_type',
          required: false,
          attributes: ['name'],
        },
        {
          model: Score,
          as: 'options',
          required: false,
          attributes: ['id', 'option', 'abjad'],
        },
        {
          model: ResultScore,
          as: 'result_score',
          required: false,
          where: { user_id: req.userId, remidial_no: req.params.remidial },
          attributes: ['value_answer'],
        },
      ],
    });
    if (data != null) {
      const resultSql = await db.sequelize.query('select count(1) as cnt from \
      ( \
        select distinct msp.question_pmb_id as cnt \
                from master_question_pmb mqp \
                  join master_score_pmb msp on mqp.id = msp.question_pmb_id \
        group by msp.question_pmb_id \
      ) as a; \
        ', { type: db.sequelize.QueryTypes.SELECT });
      const newData = {
        result: data,
        // eslint-disable-next-line radix
        total: parseInt(resultSql[0].cnt),
      };

      return res.send(success('Question berhasil ditemukan', newData, res.statusCode));
    }
    return res.status(404).send(error('Question tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

// const getUser = async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.userId, {
//       attributes: { exclude: ['password'] },
//       include: [{
//         model: Role,
//         as: 'roles',
//         required: true,
//         attributes: ['id', 'name'],
//       }],
//     });
//     if (user != null) {
//       const data = {
//         id: user.id,
//         fullname: user.fullname,
//         email: user.email,
//         phone_no: user.phone,
//         wa_no: user.wa_no,
//         imageUrl: user.imageUrl,
//         scope: [user.roles[0].name],
//       };
//       return res.send(success('User berhasil ditemukan', data, res.statusCode));
//     }
//     return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

// const getStatusFileUser = async (req, res, next) => {
//   try {
//     const result = await db.sequelize.query('select count(1) as cnt\
//           from users u \
//             join files f on f.user_id = u.id \
//           where u.id = :id and f.status = \'verified\'; \
//         ', { replacements: { id: req.userId }, type: db.sequelize.QueryTypes.SELECT });
//     console.log(result[0].cnt);
//     if (result[0].cnt != null) {
//       let data;
//       if ((result[0].cnt) === '5') {
//         data = {
//           id: req.userId,
//           status_file: 'verified',
//         };
//       } else {
//         data = {
//           id: req.userId,
//           status_file: 'not verified',
//         };
//       }
//       return res.send(success('User berhasil ditemukan', data, res.statusCode));
//     }
//     return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  createQuestion,
  createAnswer,
  getAllAnswer,
  getResultExamPMBById,
  getRemidialTo,
  // updateUser,
  // deleteUser,
  // getAllUser,
  getQuestionById,
  // getUser,
  // getStatusFileUser,
};
