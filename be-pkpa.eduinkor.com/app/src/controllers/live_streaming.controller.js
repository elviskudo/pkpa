/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getStudent } = require('../utils/student');
const { getUniversity } = require('../utils/university');
// const io = require('../utils/socketio.js').getIO();

const dbModel = db.live_streaming;
const Course = db.master_bank_course;
const Phase = db.phase_universities;
const UserLiveStreaming = db.user_live_streaming;

const createData = async (req, res, next) => {
  const {
    phase_id, course_id, type, name, event_datetime, link, description,
  } = req.body;
  try {
    const pData = {
      phase_id,
      course_id,
      type,
      name,
      event_datetime,
      link,
      description,
      owner_id: req.userId,
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

const updateData = async (req, res, next) => {
  const {
    phase_id, course_id, type, name, event_datetime, link, description,
  } = req.body;
  try {
    const pData = {
      phase_id,
      course_id,
      type,
      name,
      event_datetime,
      link,
      description,
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
  const { type } = req.query;
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
    const q = `select row_number() over(order by ls.id) as no, ls.id, pu.name as phase_name, ls.name as title, ls.event_datetime, u.name as university_name
    from live_streaming ls
      join phase_universities pu on pu.id = ls.phase_id
      join universities u on u.id = pu.university_id
    where ls.type = ? ${qUniv}
    `;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(q, {
        replacements: [type, university_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(q, {
        replacements: [type], type: db.sequelize.QueryTypes.SELECT,
      });
    }
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const q = `select ls.id, pu.id as phase_id, ls.course_id, ls.name, ls.event_datetime, u.id as university_id, ls.link
    from live_streaming ls
      join phase_universities pu on pu.id = ls.phase_id
      join universities u on u.id = pu.university_id
      where ls.id = ? 
    `;
    const data = await db.sequelize.query(q, {
      replacements: [id], type: db.sequelize.QueryTypes.SELECT,
    });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getAllDataByUser = async (req, res, next) => {
  const { type } = req.query;
  const where = {};
  if (type) {
    where.type = type;
  }
  try {
    const q = `select phase_university_id
    from (
          select s.*, row_number() over (partition by user_id order by ID desc) as rn
           from student s 
          ) as t
    where t.rn = 1 and t.user_id = ?;`;
    const student = await db.sequelize.query(q, {
      replacements: [req.userId], type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(student);
    where.phase_id = student[0].phase_university_id;
    const data = await dbModel.findAll({
      where,
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [{
        model: Course,
        as: 'courses',
        required: true,
        attributes: ['id', 'name'],
      },
      ],
    });
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataByUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await dbModel.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [{
        model: Course,
        as: 'courses',
        required: true,
        attributes: ['id', 'name'],
      }],
    });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataOnlineSession = async (req, res, next) => {
  const id = req.userId;
  try {
    const student_id = await getStudent(id);
    const q = `select mbc."name", case when uls.screenshot != 'null' then true else false end as complete
    from show_courses sc
      left join package_content_course pcc on pcc.id = sc.package_content_course_id 
      left join live_streaming ls on ls.course_id = pcc.course_id
      left join user_live_streaming uls on uls.live_streaming_id = ls.id and uls.student_id = ?
      left join master_bank_course mbc on mbc.id = pcc.course_id
    where pcc.phase_id = (select phase_university_id from student where id = ?)`;
    const data = await db.sequelize.query(q, {
      replacements: [student_id, student_id], type: db.sequelize.QueryTypes.SELECT,
    });
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
  getAllDataByUser,
  getDataByUserById,
  getDataOnlineSession,
  // getDataMonitoringOnlineSession,
};
