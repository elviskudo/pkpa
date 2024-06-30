/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getStudent } = require('../utils/student');
const { getUniversity } = require('../utils/university');

const dbModel = db.package_content_course;
const PackageDetail = db.package_content_course_details;
const Student = db.student;
// const Topic = db.master_bank_topic;
// const Type = db.master_bank_content_type;

const createData = async (req, res, next) => {
  // console.log(req.body);
  const {
    phase_id, course_id, content_category_id, itemstp, predecessor, is_publish,
  } = req.body;
  let newData = null;
  try {
    const q = await dbModel.count({
      where: {
        phase_id, course_id, content_category_id, owner_id: req.userId,
      },
    });
    if (q > 0) {
      return res.send(error('Data existing', res.statusCode));
    }
    const pData = {
      phase_id,
      course_id,
      content_category_id,
      is_publish,
      owner_id: req.userId,
    };
    if (!predecessor || predecessor !== '') {
      console.log(`predecessor: ${predecessor}`);
      pData.predecessor = predecessor;
    }
    // console.log(pData);
    const pDetail = JSON.parse(itemstp);
    // console.log(pDetail);
    await db.sequelize.transaction(async (t) => {
      try {
        newData = await dbModel.create(pData, { transaction: t });
      } catch (err) {
        console.log(err);
      }

      const arrNewItem = [];
      pDetail.forEach((element) => {
        for (let index = 0; index < element.contentTopics.length; index++) {
          const newItem = {
            package_content_course_id: newData.id,
            content_topic_id: element.contentTopics[index].id,
            order: element.contentTopics[index].urutan,
            status: element.contentTopics[index].is_active_topic,
          };
          arrNewItem.push(newItem);
        }
      });
      await PackageDetail.bulkCreate(
        arrNewItem,
        { transaction: t },
      );
    });
    const data = {
      id: newData.id,
    };

    if (data) {
      return res.send(success('Tambah data berhasil', data, res.statusCode));
    }
    return res.send(error('Tambah data gagal', res.statusCode));
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const {
    phase_id, course_id, content_category_id, itemstp, predecessor, is_publish, content_key,
  } = req.body;
  try {
    const pData = {
      phase_id,
      course_id,
      content_category_id,
      is_publish,
      owner_id: req.userId,
    };
    if (content_key) {
      if (!predecessor || predecessor !== '') {
        console.log(`predecessor: ${predecessor}`);
        pData.predecessor = predecessor;
      }
    } else {
      pData.predecessor = null;
    }

    const pDetail = JSON.parse(itemstp);
    await db.sequelize.transaction(async (t) => {
      try {
        await dbModel.update(pData, { where: { id } }, { transaction: t });
      } catch (err) {
        console.log(err);
      }

      const q2 = `delete from package_content_course_details 
                where package_content_course_id = ?;`;
      // eslint-disable-next-line max-len
      await db.sequelize.query(q2, { replacements: [id], type: db.sequelize.QueryTypes.SELECT, transaction: t });
      const arrNewItem = [];
      pDetail.forEach((element) => {
        for (let index = 0; index < element.contentTopics.length; index++) {
          console.log(element.contentTopics[index].order);
          const newItem = {
            package_content_course_id: id,
            content_topic_id: element.contentTopics[index].id,
            // eslint-disable-next-line max-len
            order: element.contentTopics[index].order !== '' ? element.contentTopics[index].order : null,
            status: element.contentTopics[index].status,
          };
          arrNewItem.push(newItem);
        }
      });
      console.log(arrNewItem);
      await PackageDetail.bulkCreate(
        arrNewItem,
        { transaction: t },
      );
    });
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
  const { phase_id, content_category_id } = req.query;
  console.log(`phaseId: ${phase_id}`);
  console.log(`content_category_id: ${content_category_id}`);
  try {
    let data = [];
    let q = `select distinct pcc.id, mbc.id as course_id, mbc."name" || ' (' || mbcc.name || ')' as name 
    from package_content_course pcc
      join master_bank_course mbc on pcc.course_id = mbc.id
      join master_bank_content_category mbcc on mbcc.id = pcc.content_category_id 
      where mbc.is_publish is true and pcc.is_publish is true and pcc.deleted_at is null and mbc.deleted_at is null
    `;

    if (content_category_id !== undefined && phase_id !== undefined) {
      q += ' and phase_id = ? and content_category_id = ? order by mbc.id;';
      data = await db.sequelize.query(q, {
        replacements: [phase_id, content_category_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else if (phase_id !== undefined) {
      q += ' and phase_id = ? ';
      data = await db.sequelize.query(q, {
        replacements: [phase_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else if (content_category_id !== undefined) {
      q += ' and content_category_id = ? ';
      data = await db.sequelize.query(q, {
        replacements: [content_category_id], type: db.sequelize.QueryTypes.SELECT,
      });
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

const getDatasuperAdmin = async (req, res, next) => {
  let { university_id } = req.query;
  const { phase_id } = req.query;
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  try {
    console.log(university_id);
    let qdata = '';
    let qUniv = '';
    if (university_id) {
      qUniv = ' where u.id = ?';
    }
    if (university_id && phase_id) {
      qUniv = ' where u.id = ? and mbp.id = ?';
    }
    const query = `select ROW_NUMBER() OVER(order by pcc.created_at desc) as no,
    pcc.id,
    mbp."name" as phase_name, 
    mbp.phase_no,
    mbc."name" as course_name,
    mbcc2."name" as category_name,
    pcc.is_publish,
    u.name as university_name
  from package_content_course as pcc 
    join phase_universities as mbp on pcc.phase_id = mbp.id 
    join master_bank_course as mbc on pcc.course_id = mbc.id 
    join master_bank_content_category mbcc2 on pcc.content_category_id = mbcc2.id
    join universities u on u.id = mbp.university_id 
    ${qUniv} order by pcc.created_at desc`;
    if (req.roleName === 'admin') {
      qdata = await db.sequelize.query(query,
        { replacements: [university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    } else {
      // qdata = await db.sequelize.query(query,
      //   { type: db.sequelize.QueryTypes.SELECT });
      qdata = await db.sequelize.query(query,
        { replacements: [university_id, phase_id], type: db.sequelize.QueryTypes.SELECT });
    }

    return res.send(success('Data berhasil ditemukan', qdata, res.statusCode));
  } catch (err) {
    next(err);
  }
};

// course topic menu
const getDataBankTopic = async (req, res, next) => {
  const { id } = req.params;
  try {
    const student_id = await getStudent(req.userId);

    const q = `
      select 
        mbt.id as topic_id, 
        mbt.name as topic_name, 
        mbct.id as content_topic_id, 
        mbct.name as content_topic_name, 
        mbcy.icon, 
        pu.id as progress_id, 
        mbct.content_type_id 
      from package_content_course pcc 
        left join package_content_course_details pccd on pcc.id = pccd.package_content_course_id 
        left join master_bank_content_topic mbct on mbct.id = pccd.content_topic_id 
        left join master_bank_topic mbt on mbt.id = mbct.topic_id 
        left join master_bank_content_type mbcy on mbcy.id = mbct.content_type_id
        left join progress_users pu on pu.content_topic_id = pccd.content_topic_id 
          and pu.student_id = ? 
          and pu.package_content_course_id = ?
      where 
        pcc.id = ? 
        and pcc.phase_id = ? 
        and pccd."status" is true
      -- order by pccd.id
      -- order by mbt.id
      order by mbt.order_topic, mbct.id
    `;
    // order by pccd.content_topic_id, mbt.id, pccd."order" `;

    const student = await Student.max('phase_university_id', {
      where: { user_id: req.userId },
    });
    console.log(student);
    const data = await db.sequelize.query(q, {
      replacements: [student_id, id, id, student],
      type: db.sequelize.QueryTypes.SELECT,
    });

    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getListPredecessor = async (req, res, next) => {
  const { phaseId, contentCategoryId } = req.query;
  try {
    const query = `select pcc.id, mbc."name" 
      from package_content_course pcc
        join master_bank_course mbc on pcc.course_id = mbc.id 
      where pcc.phase_id = ? and pcc.content_category_id = ? and pcc.owner_id = ?
      order by mbc.name;`;
    // eslint-disable-next-line max-len
    const exec = await db.sequelize.query(query, { replacements: [phaseId, contentCategoryId, req.userId], type: db.sequelize.QueryTypes.SELECT });
    console.log(exec);
    if (exec.length > 0) {
      return res.send(success('Data berhasil ditemukan', exec, res.statusCode));
    }
    return res.send(error('Data tidak ditemukan', res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataPackageDetail = async (req, res, next) => {
  const arrTopics = [];
  const newData = [];
  try {
    const query = `select mbt.id as topic_id, mbt."name" as topic_name, pcc.course_id, pcc.content_category_id, pcc.phase_id, pu.university_id, pcc.is_publish, pcc.predecessor, pccd.content_topic_id, mbct.name, pccd.id as detail_id, pccd."order", pccd.status 
    from package_content_course pcc 
      left join package_content_course_details pccd on pcc.id = pccd.package_content_course_id 
      left join master_bank_content_topic mbct on pccd.content_topic_id = mbct.id 
      left join master_bank_topic mbt on mbct.topic_id = mbt.id 
      left join phase_universities pu on pcc.phase_id = pu.id 
    where pcc.id = ?
    order by pccd.id`;
    // order by pccd.content_topic_id, mbt.id, pccd."order" `;
    const qData = await db.sequelize.query(query,
      { replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT });
    for (let index = 0; index < qData.length; index++) {
      arrTopics.push(qData[index].topic_id);
    }
    const uniqueTopics = [...new Set(arrTopics)];
    for (let index = 0; index < uniqueTopics.length; index++) {
      const arrDetail = [];
      const topic = {};
      topic.id = uniqueTopics[index];
      topic.course_id = qData[0].course_id;
      topic.content_category_id = qData[0].content_category_id;
      topic.phase_id = qData[0].phase_id;
      topic.university_id = qData[0].university_id;
      topic.is_publish = qData[0].is_publish;
      topic.predecessor = qData[0].predecessor;
      for (let j = 0; j < qData.length; j++) {
        const detail = {};
        if (uniqueTopics[index] === qData[j].topic_id) {
          detail.id = qData[j].content_topic_id;
          detail.order = qData[j].order;
          detail.status = qData[j].status;
          detail.name = qData[j].name;
          arrDetail.push(detail);
        }
        topic.contentTopics = arrDetail;
      }
      newData.push(topic);
    }
    // eslint-disable-next-line no-await-in-loop
    const qTopic = await db.sequelize.query('select id, name, topic_id, null as order, null as status from master_bank_content_topic where topic_id in (?)', {
      replacements: [uniqueTopics], type: db.sequelize.QueryTypes.SELECT,
    });
    // get different array
    // eslint-disable-next-line max-len
    const uniqueResultOne = qTopic.filter((obj) => !qData.some((obj2) => obj.id === obj2.content_topic_id));

    for (let k = 0; k < newData.length; k++) {
      console.log(`=========== ${k}->${newData[k].id} =============`);
      for (let j = 0; j < uniqueResultOne.length; j++) {
        if (uniqueResultOne[j].topic_id === newData[k].id) {
          newData[k].contentTopics.push(uniqueResultOne[j]);
        }
      }
    }
    return res.send(success('Data berhasil ditemukan', newData, res.statusCode));
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
  // getData,
  getDataBankTopic,
  getDatasuperAdmin,
  getListPredecessor,
  // getDataMatakuliah,
  getDataPackageDetail,
};
