/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getUniversity } = require('../utils/university');

const dbModel = db.show_courses;
const Student = db.student;

const createData = async (req, res, next) => {
  console.log(req.body);
  const { phase_id, courses } = req.body;
  const arrCourses = JSON.parse(courses);
  const arrItem = [];

  try {
    for (let index = 0; index < arrCourses.length; index++) {
      const item = {
        package_content_course_id: arrCourses[index].course_id,
        phase_id,
        owner_id: req.userId,
      };
      arrItem.push(item);
    }
    await dbModel.bulkCreate(arrItem);

    // remove duplicate data
    const q = 'CALL sp_delete_duplicate_show_course()';
    // const q = `DELETE FROM show_courses
    // WHERE id IN
    //     (SELECT id
    //     FROM
    //         (SELECT id,
    //          ROW_NUMBER() OVER( PARTITION BY package_content_course_id, owner_id, phase_id
    //         ORDER BY  id ) AS row_num
    //         FROM show_courses ) t
    //         WHERE t.row_num > 1 );`;
    await db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Tambah data berhasil', res.statusCode));
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  console.log(req.body);
  const { phase_id, courses } = req.body;
  const arrCourses = JSON.parse(courses);
  const arrItem = [];
  // const arrDelItem = [];
  try {
    await db.sequelize.transaction(async (t) => {
      for (let index = 0; index < arrCourses.length; index++) {
        const item = {
          package_content_course_id: arrCourses[index].course_id,
          phase_id,
          owner_id: req.userId,
        };
        arrItem.push(item);
        // arrDelItem.push(arrCourses[index].course_id);
      }
      const q = `delete from show_courses as sc
      using package_content_course as pcc 
    where pcc.phase_id = ? and pcc.id = sc.package_content_course_id`;
      await db.sequelize.query(q, {
        replacements: [phase_id], type: db.sequelize.QueryTypes.SELECT, transaction: t,
      });

      await dbModel.bulkCreate(arrItem, { transaction: t });
    });
    // remove duplicate data
    const q = 'CALL sp_delete_duplicate_show_course()';
    await db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Update data berhasil', res.statusCode));
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
  let { university_id } = req.query;
  const { phase_id } = req.query;
  let qUniv = '';
  let data = '';
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  if (university_id) {
    qUniv = ' where u.id = ?';
  }
  if (university_id && phase_id) {
    qUniv = ' where u.id = ? and pu.id = ?';
  }
  try {
    const q = `select row_number() over(order by pu.id) as no, pu.id, pu."name", 
    pu.learning_period_start, pu.learning_period_end, pu.university_id, u.name as university_name 
        from(
          select distinct pcc.phase_id
            from show_courses sc join package_content_course pcc on pcc.id = sc.package_content_course_id
          ) a join phase_universities pu on pu.id = a.phase_id
          join universities u on u.id = pu.university_id 
          ${qUniv}`;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(q,
        { replacements: [university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    } else {
      // data = await db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT });
      data = await db.sequelize.query(q,
        { replacements: [university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    }
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const q = `select pu.university_id, pcc.phase_id, pcc.content_category_id, pcc.id as course_id
    from show_courses sc
      join package_content_course pcc on sc.package_content_course_id = pcc.id 
      join phase_universities pu on pcc.phase_id = pu.id where pcc.phase_id = ? order by sc.id`;
    const qData = await db.sequelize.query(q, {
      replacements: [id], type: db.sequelize.QueryTypes.SELECT,
    });
    if (qData != null) {
      return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getDataCourse = async (req, res, next) => {
  const id = req.userId;
  try {
    console.log(id);
    const query = `select pcc."id" as id, mbp."name" as package_name,
    pcc.course_id,
    mbc."name" as course_name, mbc.background_image as bg_img, 
    mbcc2."name" as category_name, pccd.content_topic_id,
    coalesce(t.total, 0) as total, coalesce(p.progress, 0) as progress,
    coalesce(t.total, 0) - coalesce(p.progress, 0) as complete,
    p.created_at
from show_courses sc
    left join package_content_course as pcc on sc.package_content_course_id = pcc.id
    left join phase_universities as mbp on pcc.phase_id = mbp.id 
    left join master_bank_course as mbc on pcc.course_id = mbc.id and mbc.is_publish is true
    left join master_bank_content_category mbcc2 on pcc.content_category_id = mbcc2.id 
    left join (select *
      from (
        select *, row_number() over(partition by package_content_course_id order by package_content_course_id, mbct.topic_id, "order") as rn from package_content_course_details as pccd
        join master_bank_content_topic mbct on mbct.id = pccd.content_topic_id 
        where pccd.status is true) a 
      where a.rn = 1) pccd on pccd.package_content_course_id = pcc.id
      left join (select pcc.id, count(1) as total
      from package_content_course_details pccd
        join package_content_course pcc on pccd.package_content_course_id = pcc.id
      where pccd.status is true and pcc.phase_id = ?
      group by pcc.id) as t on t.id = sc.package_content_course_id 
    left join (select pcc.id, count(1) as progress, max(pu.created_at) as created_at 
      from package_content_course_details pccd
        join package_content_course pcc on pccd.package_content_course_id = pcc.id
        join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
        join student s on s.id = pu.student_id 
      where pccd.status is true and s.user_id = ? and pcc.phase_id = ?
      group by pcc.id) as p on p.id = sc.package_content_course_id
  where pcc.phase_id = ?
  order by mbcc2."order", sc.id;`;

    const phaseId = await Student.max('phase_university_id', {
      where: { user_id: req.userId },
    });
    const qData = await db.sequelize.query(query,
      {
        replacements: [phaseId, req.userId, phaseId, phaseId],
        type: db.sequelize.QueryTypes.SELECT,
      });
    // console.log(qData);
    const arrData = [];

    for (let i = 0; i < qData.length; i++) {
      const data = {
        id: qData[i].id,
        package_name: qData[i].package_name,
        course_name: qData[i].course_name,
        course_id: qData[i].course_id,
        bg_img: qData[i].bg_img,
        category_name: qData[i].category_name,
        content_topic_id: qData[i].content_topic_id,
        total: qData[i].total,
        progress: qData[i].progress,
        complete: qData[i].complete,
        created_at: qData[i].created_at,
      };
      const q = `select u.id, u.fullname 
      from tutor_courses as tc
        join admin_universities as au on au.id = tc.admin_univ_id
        join users u on au.user_id = u.id
      where tc.course_id = ?`;
      // eslint-disable-next-line no-await-in-loop
      const tutors = await db.sequelize.query(q, {
        replacements: [qData[i].course_id], type: db.sequelize.QueryTypes.SELECT,
      });
      // console.log(tutors);
      data.tutors = tutors;
      arrData.push(data);
    }
    return res.send(success('Data berhasil ditemukan', arrData, res.statusCode));
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
  getDataCourse,
};
