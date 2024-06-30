/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const { getStudent } = require('../utils/student');
const db = require('../models');
const { upsert } = require('../utils/upsert');
const { success, error } = require('../utils/response-api');

const dbModel = db.progress_users;
// const PCCD = db.package_content_course_details;

const createData = async (req, res, next) => {
  const { content_topic_id, package_content_course_id } = req.body;
  const id = req.userId;

  try {
    // get student it
    const student_id = await getStudent(id);

    const pData = {
      student_id,
      content_topic_id,
      package_content_course_id,
    };

    await upsert(dbModel, { where: pData }, pData);

    const sqlDelete = `delete from progress_users 
    where id in 
    (select id 
    from(
    select row_number() over(partition by student_id, content_topic_id, package_content_course_id order by pu.id asc) as num, pu.id
    from progress_users pu
    where student_id = ?
    ) a
    where num > 1)`;

    // remove duplicate
    // const sqlDelete = `
    //   delete
    //   from
    //     progress_users
    //   where
    //     id in 
    //       (
    //     select
    //       id
    //     from
    //       (
    //       select
    //         row_number() over(partition by student_id,
    //         content_topic_id,
    //         package_content_course_id
    //       order by
    //         pu.id asc) as num,
    //         pu.id
    //       from
    //         progress_users pu
    //       where
    //         student_id = ?
    //       ) a
    //     where
    //       num > 1)
    // `;

    await db.sequelize.query(sqlDelete, {
      replacements: [student_id],
      type: db.sequelize.QueryTypes.SELECT,
    });

    const q2 = `select *
    from(
    select row_number() over(order by mbct.topic_id, pccd."order") as no,
        pccd.content_topic_id as content_topic_id
    from package_content_course as pcc 
        left join master_bank_course as mbc on pcc.course_id = mbc.id and mbc.is_publish is true
        left join package_content_course_details pccd on pcc.id = pccd.package_content_course_id
        left join master_bank_content_topic mbct on mbct.id = pccd.content_topic_id 
        left join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pcc.id = pu.package_content_course_id and pu.student_id = ?
    where pcc.id = ? and pccd.status is true
    ) a 
    where content_topic_id = ?`;

    // get next number
    // const q2 = `
    //   select
    //     *
    //   from
    //     (
    //     select
    //       row_number() over(
    //       order by 
    //       mbt.order_topic) as no,
    //       pccd.content_topic_id as content_topic_id
    //     from
    //       package_content_course as pcc
    //     left join master_bank_course as mbc on
    //       pcc.course_id = mbc.id
    //       and mbc.is_publish is true
    //     left join package_content_course_details pccd on
    //       pcc.id = pccd.package_content_course_id
    //     left join master_bank_content_topic mbct on
    //       mbct.id = pccd.content_topic_id
    //     left join master_bank_topic mbt on mbt.id = mbct.topic_id
    //     left join progress_users pu on
    //       pu.content_topic_id = pccd.content_topic_id
    //       and pcc.id = pu.package_content_course_id
    //       and pu.student_id = ?
    //     where
    //       pcc.id = ?
    //       and pccd.status is true
    //   ) a
    //   where
    //     content_topic_id = ?
    // `;

    const nextNo = await db.sequelize.query(q2, {
      replacements: [student_id, package_content_course_id, content_topic_id],
      type: db.sequelize.QueryTypes.SELECT,
    });

    const q3 = `select *
    from (
    select row_number() over(order by mbct.topic_id, pccd."order") as no,
        pccd.content_topic_id as content_topic_id
    from package_content_course as pcc 
        left join master_bank_course as mbc on pcc.course_id = mbc.id and mbc.is_publish is true
        left join package_content_course_details pccd on pcc.id = pccd.package_content_course_id
        left join master_bank_content_topic mbct on mbct.id = pccd.content_topic_id 
        left join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pcc.id = pu.package_content_course_id and pu.student_id = ?
    where pcc.id = ? and pccd.status is true
    ) a 
    where no > ?`;

    // get next data
    // const q3 = `
    //   select *
    //   from (
    //   select
    //     row_number() over(
    //     order by 
    //     mbt.order_topic) as no,
    //     pccd.content_topic_id as content_topic_id
    //   from
    //     package_content_course as pcc
    //   left join master_bank_course as mbc on
    //     pcc.course_id = mbc.id
    //     and mbc.is_publish is true
    //   left join package_content_course_details pccd on
    //     pcc.id = pccd.package_content_course_id
    //   left join master_bank_content_topic mbct on
    //     mbct.id = pccd.content_topic_id
    //   left join master_bank_topic mbt on mbt.id = mbct.topic_id
    //   left join progress_users pu on
    //     pu.content_topic_id = pccd.content_topic_id
    //     and pcc.id = pu.package_content_course_id
    //     and pu.student_id = ?
    //   where
    //     pcc.id = ?
    //     and pccd.status is true
    //       ) a
    //   where
    //   no > ?
    // `;

    const nextData = await db.sequelize.query(q3, {
      replacements: [student_id, package_content_course_id, nextNo[0].no],
      type: db.sequelize.QueryTypes.SELECT,
    });

    const maxData = await db.sequelize.query(`select content_topic_id as max_id from package_content_course_details where package_content_course_id = ? and status is true order by "order" desc limit 1;`, {
      replacements: [package_content_course_id], type: db.sequelize.QueryTypes.SELECT,
    });

    // get max data
    // const maxData = await db.sequelize.query(`
    //   select
    //     content_topic_id as max_id
    //   from
    //     package_content_course_detailsselect
    //     pccd.content_topic_id as max_id
    //   from
    //     package_content_course_details pccd
    //   left join master_bank_content_topic mbct on mbct.id = pccd.content_topic_id 
    //   left join master_bank_topic mbt on mbt.id = mbct.topic_id 
    //   where
    //     pccd.package_content_course_id = ?
    //     and pccd.status is true
    //   order by
    //     mbt.order_topic desc
    //   limit 1
    // `, {
    //   replacements: [package_content_course_id], type: db.sequelize.QueryTypes.SELECT,
    // });

    console.log('=======')
    console.log('nextData', nextData)
    console.log('maxData', maxData)
    console.log('=======')

    // console.log(nextData[0].content_topic_id);
    // console.log(maxData[0].max_id);
    // if (ui.created) {
    //   return res.send(success('Tambah data berhasil', res.statusCode));
    // }
    let cct_id = 0
    if (nextData[0])
      cct_id = nextData[0].content_topic_id

    console.log('====')
    console.log('cct_id', cct_id)
    console.log('====')

    const data = { next: cct_id, max: maxData[0].max_id };
    return res.send(success('Update data berhasil', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  try {
    const pData = {
      name: req.body.name,
      description: req.body.description,
      is_active: req.body.is_active,
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
};
