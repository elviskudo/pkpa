/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getStudent } = require('../utils/student');

const dbModel = db.result_answers;
const Question = db.master_bank_content_question;

const createData = async (req, res, next) => {
  console.log(req.body);
  const { data, content_topic_id } = req.body;
  const id = req.userId;
  try {
    const student_id = await getStudent(id);
    const sql = `select coalesce(max(distinct remidial_no), 0) as number
    from result_answers ra 
      join master_bank_content_question mbcq on ra.content_question_id = mbcq.id 
    where mbcq.content_topic_id = ? and ra.student_id = ?;`;
    const count = await db.sequelize.query(sql, {
      replacements: [content_topic_id, student_id], type: db.sequelize.QueryTypes.SELECT,
    });
    const newCount = count[0].number + 1;
    console.log(count[0].number);
    console.log(data);
    data.forEach(async (item) => {
      if (typeof item.answer !== 'undefined') {
        console.log(item.answer);
        // eslint-disable-next-line max-len
        await dbModel.create({
          student_id,
          content_question_id: item.question,
          answer: item.answer,
          remidial_no: newCount,
        });
      }
    });

    return res.send(success('Tambah data berhasil', res.statusCode));
  } catch (err) {
    next(err);
  }
};

const resultQuiz = async (req, res, next) => {
  const { content_topic_id } = req.params;
  const id = req.userId;
  try {
    const student_id = await getStudent(id);
    // const countQuestion = await Question.count({ where: { content_topic_id } });

    const sql = `select
      remidial_no,
      TO_CHAR(created_at,
      'YYYY-MM-DD HH24:MI:SS') as created_at,
      countQuestion,
      sum(correct) as correct,
      countQuestion-sum(correct) as wrong,
      round(cast (sum(correct) as decimal) / countQuestion * 100,
      2) as value
    from
      (
      select
        ra.remidial_no,
        min(ra.created_at) as created_at,
        coalesce(case
          when mbco.is_correct is true then count(1)
        end,
        0) as correct,
        (
        select
          count(1)
        from
          master_bank_content_question
        where
          content_topic_id = ?) as countQuestion
      from
        result_answers ra
      join master_bank_content_question mbcq on
        ra.content_question_id = mbcq.id
      join master_bank_content_option mbco on
        mbco.id = ra.answer
      where
        mbcq.content_topic_id = ?
        and ra.student_id = ?
      group by
        ra.remidial_no,
        mbco.is_correct 
      ) a
    group by
      remidial_no,
      TO_CHAR(created_at,
      'YYYY-MM-DD HH24:MI:SS'),
      countQuestion
    order by
      remidial_no desc`;

    const q = await db.sequelize.query(sql, {
      replacements: [content_topic_id, content_topic_id, student_id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(q);

    return res.send(success('Result', q, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const listResult = async (req, res, next) => {
  const { content_topic_id, remidial_no } = req.params;
  const id = req.userId;

  try {
    const student_id = await getStudent(id);
    const sql = `
      select
        ra.remidial_no,
        mbcq."name" as question,
        mbco."option" as answer,
        mbco.is_correct
      from
        result_answers ra
      left join (
        select id, name, content_topic_id from master_bank_content_question where content_topic_id = ?
      ) mbcq on mbcq.id = ra.content_question_id 
      left join master_bank_content_option mbco on
        mbco.id = ra.answer
      where
        mbcq.content_topic_id = ?
        and ra.student_id = ?
        and ra.remidial_no = ?
      ;
    `;

    const q = await db.sequelize.query(sql, {
      replacements: [content_topic_id, content_topic_id, student_id, remidial_no],
      type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(q);

    return res.send(success('Result', q, res.statusCode));
  } catch (err) {
    next(err);
  }
}

const updateData = async (req, res, next) => {
  try {
    const pData = {
      name: req.body.name,
      description: req.body.description,
      is_active: req.body.is_active,
      owner_id: req.body.owner_id,
    };
    const qData = await dbModel.update(pData, {
      where: {
        id: req.params.id,
      },
    });

    if (qData > 0) {
      return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
    }
    return res.status(404).send(error('Update data gagal', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const deleteData = async (req, res, next) => {
  try {
    const qData = await dbModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (qData > 0) {
      return res.send(success('Hapus data berhasil', { id: req.params.id }, res.statusCode));
    }
    return res.status(404).send(error('Hapus data gagal', res.statusCode, true));
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
  try {
    const data = await dbModel.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } });
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

module.exports = {
  createData,
  updateData,
  deleteData,
  getAllData,
  getDataById,
  resultQuiz,
  listResult
};
