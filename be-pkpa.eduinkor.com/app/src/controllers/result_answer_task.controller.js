/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getStudent } = require('../utils/student');
const { upsert } = require('../utils/upsert');

const dbModel = db.result_answers_tasks;

const createData = async (req, res, next) => {
  const { content_topic_id } = req.body;
  const id = req.userId;
  try {
    const student_id = await getStudent(id);
    const pData = {
      student_id,
      content_topic_id,
    };

    if (typeof req.files !== 'undefined') {
      if (req.files.url) {
        pData.url = req.files.url[0].location;
        pData.originalname = req.files.url[0].originalname;
      }
    }

    const data = upsert(dbModel, { where: { student_id, content_topic_id } }, pData);
    // const qData = await dbModel.create(pData);
    // const newData = {
    //   id: qData.id,
    // };
    if (data.created) {
      return res.send(success('Tambah data berhasil', data.item, res.statusCode));
    }
    return res.send(success('Update data berhasil', data.item, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  const { score } = req.body;
  try {
    const pData = {
      score,
      owner_id: req.userId,
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
  let where = '';
  if (req.roleName === 'admin') {
    where = ' where pun.university_id = ?';
  } else if (req.roleName === 'tutor') {
    where = ' where pun.university_id = ?';
  }
  try {
    const q = `select rat.id, s.reg_no, u.fullname, LPAD(pu.phase_no::char, 2, '0') as phase,
    mbct."name" as title, rat.created_at,un."name" as Univ
  from result_answers_tasks rat
    join master_bank_content_topic mbct on mbct.id = rat.content_topic_id
    join student s on s.id = rat.student_id
    join users u on u.id = s.user_id 
    join phase_universities pu on pu.id = s.phase_university_id 
    join universities un on un.id = pu.university_id 
    ${where}
  order by rat.created_at desc;`;
    let data;
    if (req.roleName === 'admin') {
      const university_id = await getUniversity(req.userId);
      data = await db.sequelize.query(q, {
        replacements: [university_id],
        type: db.sequelize.QueryTypes.SELECT,
      });
    } else if (req.roleName === 'tutor') {
      const university_id = await getUniversity(req.userId);
      data = await db.sequelize.query(q, {
        replacements: [university_id],
        type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT });
    }
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const q = `select rat.id, s.reg_no, u2."name" as university_name, u.fullname
    , LPAD(pu.phase_no::char, 2, '0') as phase, mbct."name" as title, mbct.description, rat.created_at
    , mbct.url as url_question, rat.url as url_answer
    , rat.originalname as originalname_answer, mbct.originalname as originalname_question 
    , rat.score
    from result_answers_tasks rat
      join master_bank_content_topic mbct on mbct.id = rat.content_topic_id
      join student s on s.id = rat.student_id 
      join users u on u.id = s.user_id 
      join phase_universities pu on pu.id = s.phase_university_id 
      join universities u2 on u2.id = pu.university_id 
    where rat.id = ?;`;
    // eslint-disable-next-line max-len
    const data = await db.sequelize.query(q, { replacements: [id], type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
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
};
