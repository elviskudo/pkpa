/* eslint-disable camelcase */
// const dbModel = require('../models/nosql/user_activity');
const db = require('../models');
const { error, success } = require('../utils/response-api');
const { getStudent } = require('../utils/student');
const { getUniversity } = require('../utils/university');

const User = db.users;
const Student = db.student;

// const createData = async (req, res, next) => {
//   try {
//     const pData = {
//       user_id: req.body.user_id,
//       fullname: req.body.fullname,
//       last_login: req.body.last_login,
//       last_date: req.body.last_date,
//       progress: req.body.progress,
//     };

//     const qData = await dbModel.create(pData);
//     const newData = qData;
//     return res.send(success('Tambah data berhasil', newData, res.statusCode));
//   } catch (err) {
//     next(err);
//   }
// };

// const updateData = async (req, res, next) => {
//   try {
//     const pData = {
//       user_id: req.body.user_id,
//       fullname: req.body.fullname,
//       last_login: req.body.last_login,
//       last_date: req.body.last_date,
//       progress: req.body.progress,
//     };
//     const { id } = req.params;

//     await dbModel.findByIdAndUpdate(id, pData); // returns Query
//     return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

const getAllData = async (req, res, next) => {
  let where = '';
  if (req.roleName === 'admin') {
    where = ' where pun.university_id = ?';
  } else if (req.roleName === 'tutor') {
    where = ' where pun.university_id = ?';
  }
  try {
    // const data = await User.findAll({
    //   attributes: ['fullname'],
    // });
    const q = `select s.id, s.user_id, u.fullname, u.created_at, u.last_login, phase_university_id, coalesce(pu.progress, 0) as progress, coalesce(pcc.total, 0) as total
              from student s
                join phase_universities pun on s.phase_university_id = pun.id
                left join users u on s.user_id = u.id 
                left join (select student_id, pcc.phase_id, count(1) as progress
                  from progress_users pu
                  join package_content_course_details pccd on pccd.package_content_course_id = pu.package_content_course_id and pu.content_topic_id = pccd.content_topic_id 
                  join package_content_course pcc on pccd.package_content_course_id = pcc.id
                  join show_courses sc on sc.package_content_course_id = pcc.id
                where pccd.status is true
                group by student_id, pcc.phase_id ) pu on pu.student_id = s.id and pu.phase_id = s.phase_university_id
                left join (select phase_id, count(1) as total
                  from package_content_course_details pccd
                    join package_content_course pcc on pccd.package_content_course_id = pcc.id
                    join show_courses sc on sc.package_content_course_id = pcc.id
                  where pccd.status is true
                  group by pcc.phase_id ) pcc on pcc.phase_id = s.phase_university_id
              ${where}`;
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
      data = await db.sequelize.query(q, {
        type: db.sequelize.QueryTypes.SELECT,
      });
    }
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getAllById = async (req, res, next) => {
  try {
    const q = `select distinct s.id, s.user_id, u.fullname, u.image_url, u.created_at, u.last_login, s.phase_university_id, mbcc.id as category_id, mbcc."name" as category_name, mbc.id as course_id, mbc."name" as course_name
    , coalesce(pu2.progress_all, 0) as progress_all, coalesce(pcc2.total_all, 0) as total_all
    , coalesce(pu3.progress, 0) as progress, coalesce(pcc3.total, 0) as total
    from student s
        join users u on s.user_id = u.id 
        join progress_users pu on pu.student_id = s.id
        join package_content_course pcc on pu.package_content_course_id = pcc.id
        join show_courses sc2 on sc2.package_content_course_id = pcc.id
        join master_bank_content_category mbcc on pcc.content_category_id = mbcc.id
        join master_bank_course mbc on pcc.course_id = mbc.id
        join (select student_id, pcc.phase_id, count(1) as progress_all
          from progress_users pu
            join show_courses sc3 on pu.package_content_course_id = sc3.package_content_course_id 
            join package_content_course pcc on pcc.id = sc3.package_content_course_id 
            join package_content_course_details pccd on sc3.package_content_course_id = pccd.package_content_course_id and pu.content_topic_id = pccd.content_topic_id and pccd.status is true
            group by student_id, pcc.phase_id ) pu2 on pu2.student_id = s.id and pu2.phase_id = s.phase_university_id 
        join (select phase_id, count(1) as total_all
          from package_content_course_details pccd
            join package_content_course pcc on pccd.package_content_course_id = pcc.id
            join show_courses sc on sc.package_content_course_id = pcc.id
          where pccd.status is true
          group by pcc.phase_id ) pcc2 on pcc2.phase_id = s.phase_university_id
        join (select student_id, pccd.package_content_course_id, count(1) as progress
          from progress_users pu
            join show_courses sc3 on pu.package_content_course_id = sc3.package_content_course_id 
            join package_content_course_details pccd on pu.package_content_course_id = pccd.package_content_course_id and pu.content_topic_id = pccd.content_topic_id and pccd.status is true
          group by student_id, pccd.package_content_course_id) pu3 on pu3.student_id = s.id and pcc.id = pu3.package_content_course_id
        join (select phase_id, pccd.package_content_course_id, count(1) as total
          from package_content_course_details pccd
            join package_content_course pcc on pccd.package_content_course_id = pcc.id
            join show_courses sc on sc.package_content_course_id = pcc.id
          where pccd.status is true
          group by pcc.phase_id, pccd.package_content_course_id) pcc3 on pcc.phase_id = s.phase_university_id and pcc.id = pcc3.package_content_course_id
    where s.id = ?`;
    const data = await db.sequelize.query(q, {
      replacements: [req.params.id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getCertificatePKPAByUser = async (req, res, next) => {
  try {
    const student_id = await getStudent(req.userId);
    const q = `select distinct concat(s.reg_no,'.',lpad(pun.phase_no::text, 2, '0'),'-',upper(u2.slug),'.', lpad(extract(month from p.created_at)::text, 2, '0'), '-', extract(year from p.created_at)) as certificate_no, s.id, s.user_id, u.fullname, u.image_url, u.created_at, u.last_login, s.phase_university_id, u2.certificate 
    --    , coalesce(pu2.progress_all, 0) as progress_all, coalesce(pcc2.total_all, 0) as total_all
        , coalesce(pcc2.total_all, 0) - coalesce(pu2.progress_all, 0) as diff
        , p.created_at
        , 'Pendidikan Khusus Profesi Advokat' as course_name
        from student s
          join phase_universities pun on pun.id = s.phase_university_id
          join universities u2 on u2.id = pun.university_id 
            join users u on s.user_id = u.id 
            join progress_users pu on pu.student_id = s.id
            join package_content_course pcc on pu.package_content_course_id = pcc.id
            join show_courses sc2 on sc2.package_content_course_id = pcc.id
            join master_bank_content_category mbcc on pcc.content_category_id = mbcc.id
            join master_bank_course mbc on pcc.course_id = mbc.id
            join (select student_id, pcc.phase_id, count(1) as progress_all
              from progress_users pu
              join show_courses sc3 on pu.package_content_course_id = sc3.package_content_course_id
              join package_content_course pcc on pcc.id = sc3.package_content_course_id
              join package_content_course_details pccd on sc3.package_content_course_id = pccd.package_content_course_id and pu.content_topic_id = pccd.content_topic_id and pccd.status is true
              group by student_id, pcc.phase_id ) pu2 on pu2.student_id = s.id and pu2.phase_id = s.phase_university_id 
            join (select phase_id, count(1) as total_all
              from package_content_course_details pccd
                join package_content_course pcc on pccd.package_content_course_id = pcc.id
                join show_courses sc on sc.package_content_course_id = pcc.id
              where pccd.status is true
              group by pcc.phase_id ) pcc2 on pcc2.phase_id = s.phase_university_id
            join (select pcc.phase_id , max(pu.created_at) as created_at 
            from package_content_course_details pccd
              join package_content_course pcc on pccd.package_content_course_id = pcc.id
              join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
              join student s on s.id = pu.student_id 
            where pccd.status is true and s.id = ?
            group by pcc.phase_id) as p on p.phase_id = s.phase_university_id 
        where s.id = ?;`;
    const data = await db.sequelize.query(q, {
      replacements: [student_id, student_id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    if (data.length > 0 && (data[0].diff === '0')) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.send(error('Data tidak ada', res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getCertificatePKPAByAdmin = async (req, res, next) => {
  let qUniv = '';
  let data = '';
  let { university_id } = req.query;
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }

  console.log('===================')
  console.log('req.query', req.query)
  console.log('req.roleName', req.roleName)
  console.log('req.userId', req.userId)
  console.log('university_id', university_id)
  console.log('===================')

  if (university_id) {
    qUniv = ' where tbl_certi.university_id = ?';
  }

  try {
    const q = `select * from (select distinct concat(s.reg_no,'.',lpad(pun.phase_no::text, 2, '0'),'-',upper(u2.slug),'.', lpad(extract(month from p.created_at)::text, 2, '0'), '-', extract(year from p.created_at)) as certificate_no, s.id, s.user_id, u.fullname, u.image_url, u.created_at, u.last_login, s.phase_university_id, u2.certificate 
    , coalesce(pu2.progress_all, 0) as progress_all, coalesce(pcc2.total_all, 0) as total_all
    , coalesce(pcc2.total_all, 0) - coalesce(pu2.progress_all, 0) as diff
    , p.created_at
    , 'Pendidikan Khusus Profesi Advokat' as course_name
    , u2.id as university_id
    from student s
        join phase_universities pun on pun.id = s.phase_university_id
        join universities u2 on u2.id = pun.university_id 
        join users u on s.user_id = u.id 
        join progress_users pu on pu.student_id = s.id
        join package_content_course pcc on pu.package_content_course_id = pcc.id
        join show_courses sc2 on sc2.package_content_course_id = pcc.id
        join master_bank_content_category mbcc on pcc.content_category_id = mbcc.id
        join master_bank_course mbc on pcc.course_id = mbc.id
        join (select student_id, pcc.phase_id, count(1) as progress_all
        from progress_users pu
          join show_courses sc3 on pu.package_content_course_id = sc3.package_content_course_id
          join package_content_course pcc on pcc.id = sc3.package_content_course_id
          join package_content_course_details pccd on sc3.package_content_course_id = pccd.package_content_course_id and pu.content_topic_id = pccd.content_topic_id and pccd.status is true
          group by student_id, pcc.phase_id ) pu2 on pu2.student_id = s.id and pu2.phase_id = s.phase_university_id 
        join (select phase_id, count(1) as total_all
          from package_content_course_details pccd
            join package_content_course pcc on pccd.package_content_course_id = pcc.id
            join show_courses sc on sc.package_content_course_id = pcc.id
          where pccd.status is true
          group by pcc.phase_id ) pcc2 on pcc2.phase_id = s.phase_university_id
        join (select s.id, pcc.phase_id , max(pu.created_at) as created_at 
        from package_content_course_details pccd
          join package_content_course pcc on pccd.package_content_course_id = pcc.id
          join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
          join student s on s.id = pu.student_id 
        where pccd.status is true
        group by pcc.phase_id, s.id) as p on p.phase_id = s.phase_university_id and p.id = s.id) as tbl_certi
        ${qUniv}`;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(q, {
        replacements: [university_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(q, {
        type: db.sequelize.QueryTypes.SELECT,
      });
    }
    const graduate = data.filter((item) => item.diff === '9' || item.diff === '0');
    // const graduate = data.filter((item) => item.diff === '0');

    console.log('========')
    console.log('data', data)
    console.log('req.universityId', req.universityId)
    console.log('graduate', graduate)
    console.log('========')
    if (graduate.length > 0) {
      return res.send(success('Data berhasil ditemukan', graduate, res.statusCode));
    }
    return res.send(error('Data tidak ditemukan', res.statusCode));
  } catch (err) {
    next(err);
  }
};

// const deleteData = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     await dbModel.findByIdAndDelete(id); // returns Query
//     return res.send(success('Hapus data berhasil', { id: req.params.id }, res.statusCode));
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  getAllData,
  getAllById,
  getCertificatePKPAByUser,
  getCertificatePKPAByAdmin,
};
