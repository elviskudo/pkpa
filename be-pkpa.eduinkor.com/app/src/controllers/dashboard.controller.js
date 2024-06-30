/* eslint-disable camelcase */
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getUniversity } = require('../utils/university');

const getDataDashboard = async (req, res, next) => {
  let { university_id } = req.query;
  const { phase_id } = req.query;
  console.log(university_id);
  console.log(phase_id);
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  let qUniv = '';
  // const qPhase = '';
  if (university_id && phase_id) {
    qUniv = ' where un.id= ? and pu.id = ?';
  } else if (university_id) {
    qUniv = ' where un.id= ?';
  }
  const query = `select distinct drv_a.total_mhs,drv_b.total_pengguna,
  drv_c.total_phase,drv_ab.new_stu,drv_ac.new_user
  from 
  (select 1 as id_tmp, count(s.user_id) as total_mhs 
  from student s 
  join phase_universities pu on s.phase_university_id = pu.id 
  join universities un on un.id = pu.university_id
  ${qUniv}) as drv_a
  join 
  (select 1 as id_tmp, count(u.id) as total_pengguna from users u 
  join user_universities uu on u.id = uu.user_id 
  join phase_universities pu on uu.phase_university_id = pu.id 
  join universities un on un.id = pu.university_id
  ${qUniv}) as drv_b
  on (drv_a.id_tmp=drv_b.id_tmp)
  join
  (select 1 as id_tmp,count(pu.phase_no) as total_phase from phase_universities pu 
  join universities un on pu.university_id = un.id 
  ${qUniv}) as drv_c
   on (drv_a.id_tmp=drv_c.id_tmp)
   join
  (select 1 as id_tmp, count(s.user_id) as new_stu
  from student s 
  join phase_universities pu on s.phase_university_id = pu.id and s.created_at ::date >= now()::date
  join universities un on un.id = pu.university_id
  ${qUniv}) as drv_ab
  on (drv_a.id_tmp=drv_ab.id_tmp)
  join
  (select 1 as id_tmp,count(u.id) as new_user from users u 
   join user_role ur 
   on u.id = ur.user_id and u.created_at ::date >= now()::date
   join roles r
   on r.id = ur.role_id and r."name" = 'user') as drv_ac
   on (drv_a.id_tmp=drv_ac.id_tmp)`;
  // let query = '';
  let data = [];
  try {
    // eslint-disable-next-line camelcase
    if (university_id && phase_id) {
      data = await db.sequelize.query(query,
        // eslint-disable-next-line max-len
        { replacements: [university_id, phase_id, university_id, phase_id, university_id, phase_id, university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    } else if (university_id) {
    //   query += 'where drv_a.id = :university_id';
      data = await db.sequelize.query(query,
        // eslint-disable-next-line max-len
        { replacements: [university_id, university_id, university_id, university_id, university_id, university_id, university_id, university_id], type: db.sequelize.QueryTypes.SELECT });
    // eslint-disable-next-line camelcase
    } else {
      // query += 'order by drv_a.id';
      data = await db.sequelize.query(query,
        { type: db.sequelize.QueryTypes.SELECT });
    }
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

const getDataStatistik = async (req, res, next) => {
  // const ArrUser = [];
  let { university_id } = req.query;
  const { phase_id } = req.query;
  console.log(university_id);
  console.log(phase_id);
  let qUniv = '';
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  if (university_id && phase_id) {
    // eslint-disable-next-line no-const-assign
    qUniv = ' and un.id= ? and pu.id = ?';
  } else if (university_id) {
    // eslint-disable-next-line no-const-assign
    qUniv = ' and un.id= ?';
  }
  const query = `select * from (select '00-06' as param,'Pagi Buta' as waktu,
  count(u.id) as user_login from users u 
  join student s on u.id = s.user_id 
  join phase_universities pu on s.phase_university_id = pu.id 
  join universities un on un.id = pu.university_id
  where DATE_PART('hour',u.last_login) between '00' and '06' ${qUniv}
  union
  select '06-12' as param,'Pagi' as waktu,
  count(u.id) as user_login from users u 
  join student s on u.id = s.user_id 
  join phase_universities pu on s.phase_university_id = pu.id 
  join universities un on un.id = pu.university_id
  where DATE_PART('hour',u.last_login) between '06' and '12' ${qUniv}
  union 
  select '12-18' as param,'Siang' as waktu,
  count(u.id) as user_login from users u 
  join student s on u.id = s.user_id 
  join phase_universities pu on s.phase_university_id = pu.id 
  join universities un on un.id = pu.university_id
  where DATE_PART('hour',u.last_login) between '12' and '18' ${qUniv}
  union 
  select '18-00' as param,'Malam' as waktu,
  count(u.id) as user_login from users u 
  join student s on u.id = s.user_id 
  join phase_universities pu on s.phase_university_id = pu.id 
  join universities un on un.id = pu.university_id
  where DATE_PART('hour',u.last_login) between '18' and '00' ${qUniv}) tb_a
  order by param`;
  let data = [];
  try {
    // eslint-disable-next-line camelcase
    if (university_id && phase_id) {
      data = await db.sequelize.query(query,
        // eslint-disable-next-line max-len
        { replacements: [university_id, phase_id, university_id, phase_id, university_id, phase_id, university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    } else if (university_id) {
      //   query += 'where drv_a.id = :university_id';
      data = await db.sequelize.query(query,
        // eslint-disable-next-line max-len
        { replacements: [university_id, university_id, university_id, university_id, university_id, university_id, university_id, university_id], type: db.sequelize.QueryTypes.SELECT });
      // eslint-disable-next-line camelcase
    } else {
      // query += 'order by drv_a.id';
      data = await db.sequelize.query(query,
        { type: db.sequelize.QueryTypes.SELECT });
    }
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};
const getPieDataStatistik = async (req, res, next) => {
// const ArrUser = [];
  let { university_id } = req.query;
  const { phase_id } = req.query;
  console.log(university_id);
  console.log(phase_id);
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  let qUniv = '';
  if (university_id && phase_id) {
  // eslint-disable-next-line no-const-assign
    qUniv = ' where tbl_b.idUniv = ? and tbl_b.phase_university_id= ?';
  } else if (university_id) {
  // eslint-disable-next-line no-const-assign
    qUniv = ' where tbl_b.idUniv = ?';
  }
  const query = `select count(tbl_b.id) as total,tbl_b.status from(
    select tbl_a.id,tbl_a.idUniv,tbl_a.phase_university_id,
    case when tbl_a.total = tbl_a.progress or tbl_a.total = 0  then 'Tuntas'
    when tbl_a.progress > 0 and tbl_a.progress < tbl_a.total then 'Belum Tuntas' 
    else 'Belum Mulai' end as Status
    from(select s.id, s.user_id, u.fullname, u.created_at, u2.id as idUniv,
    u.last_login, phase_university_id, coalesce(pu.progress, 0) as progress, coalesce(pcc.total, 0) as total
    from student s
    left join users u on s.user_id = u.id 
    left join phase_universities pu2 on pu2.id = s.phase_university_id
    left join universities u2 on u2.id = pu2.university_id 
    left join (select student_id, count(1) as progress
    from progress_users pu
    group by student_id ) pu on pu.student_id = s.id
    left join (select phase_id, count(1) as total
    from package_content_course_details pccd
    join package_content_course pcc on pccd.package_content_course_id = pcc.id
    join show_courses sc on sc.package_content_course_id = pcc.id
    where pccd.status is true
    group by pcc.phase_id ) pcc on pcc.phase_id = s.phase_university_id) tbl_a)tbl_b
    ${qUniv}
    group by tbl_b.status`;
  let data = [];
  try {
  // eslint-disable-next-line camelcase
    if (university_id && phase_id) {
      data = await db.sequelize.query(query,
      // eslint-disable-next-line max-len
        { replacements: [university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    } else if (university_id) {
    //   query += 'where drv_a.id = :university_id';
      data = await db.sequelize.query(query,
      // eslint-disable-next-line max-len
        { replacements: [university_id, university_id], type: db.sequelize.QueryTypes.SELECT });
    // eslint-disable-next-line camelcase
    } else {
    // query += 'order by drv_a.id';
      data = await db.sequelize.query(query,
        { type: db.sequelize.QueryTypes.SELECT });
    }
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDataDashboard,
  getDataStatistik,
  getPieDataStatistik,
};
