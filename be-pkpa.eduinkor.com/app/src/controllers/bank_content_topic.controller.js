/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const dbModel = db.master_bank_content_topic;
const Topic = db.master_bank_topic;
const Course = db.master_bank_course;
const University = db.universities;
const Type = db.master_bank_content_type;

const createData = async (req, res, next) => {
  console.log(req.body);
  const {
    content_type_id, topic_id, name, description, is_active, access_limit, quiz_type,
    is_random,
    is_commentary,
    min_value,
    duration,
    assesment_weight,
    remidial_type,
    limit_remidial_value,
    is_skip,
    is_show_result,
  } = req.body;
  try {
    const pData = {
      content_type_id,
      topic_id,
      name,
      description,
      is_active,
      is_random,
      is_commentary,
      is_skip,
      is_show_result,
      owner_id: req.userId,
    };
    if (access_limit && access_limit !== 'null') {
      pData.access_limit = access_limit;
    }
    if (quiz_type && quiz_type !== 'null') {
      pData.quiz_type = quiz_type;
    }
    if (min_value && min_value !== 'null') {
      pData.min_value = min_value;
    }
    if (duration && duration !== 'null') {
      pData.duration = duration;
    }
    if (assesment_weight && assesment_weight !== 'null') {
      pData.assesment_weight = assesment_weight;
    }
    if (remidial_type && remidial_type !== 'null') {
      pData.remidial_type = remidial_type;
    }
    if (limit_remidial_value && limit_remidial_value !== 'null') {
      pData.limit_remidial_value = limit_remidial_value;
    }
    if (typeof req.files !== 'undefined') {
      if (req.files.url) {
        pData.url = req.files.url[0].location;
        pData.originalname = req.files.url[0].originalname;
      } else {
        pData.url = req.body.url;
      }
    }

    console.log(pData);
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
    content_type_id, topic_id, name, description, is_active, access_limit, quiz_type,
    is_random,
    is_commentary,
    min_value,
    duration,
    assesment_weight,
    remidial_type,
    limit_remidial_value,
    is_skip,
    is_show_result,
  } = req.body;
  try {
    const pData = {
      content_type_id,
      topic_id,
      name,
      description,
      is_active,
      is_random,
      is_commentary,
      is_skip,
      is_show_result,
      owner_id: req.userId,
    };
    if (access_limit && access_limit !== 'null') {
      pData.access_limit = access_limit;
    }
    if (access_limit === '') {
      pData.access_limit = null;
    }
    if (quiz_type && quiz_type !== 'null') {
      pData.quiz_type = quiz_type;
    }
    if (min_value && min_value !== 'null') {
      pData.min_value = min_value;
    }
    if (duration && duration !== 'null') {
      pData.duration = duration;
    }
    if (assesment_weight && assesment_weight !== 'null') {
      pData.assesment_weight = assesment_weight;
    }
    if (remidial_type && remidial_type !== 'null') {
      pData.remidial_type = remidial_type;
    }
    if (limit_remidial_value && limit_remidial_value !== 'null') {
      pData.limit_remidial_value = limit_remidial_value;
    }
    if (typeof req.files !== 'undefined') {
      if (req.files.url) {
        pData.url = req.files.url[0].location;
        pData.originalname = req.files.url[0].originalname;
      } else {
        pData.url = req.body.url;
      }
    }
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
      force: true,
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
  const { topicId, university_id } = req.query;
  let where = null;
  if (topicId) {
    where = { topic_id: topicId };
  }
  try {
    let data = null;
    if (university_id) {
      data = await dbModel.findAll({
        where,
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [
          {
            model: Topic,
            as: 'topic',
            required: true,
            attributes: ['name'],
            include: {
              model: Course,
              as: 'course',
              required: true,
              attributes: ['id'],
              include: {
                attributes: ['id'], model: University, as: 'universities', where: { id: university_id },
              },
            },
          },
          {
            model: Type,
            as: 'type',
            required: true,
            attributes: ['name'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });
    } else {
      data = await dbModel.findAll({
        where,
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [
          {
            model: Topic,
            as: 'topic',
            required: true,
            attributes: ['name'],
          },
          {
            model: Type,
            as: 'type',
            required: true,
            attributes: ['name'],
          },
        ],
        order: [['createdAt', 'DESC']],
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
      include: [
        {
          model: Topic,
          as: 'topic',
          required: true,
          attributes: ['name'],
          include: [
            {
              model: Course,
              as: 'course',
              attributes: ['name'],
              required: true,
            },
          ],
        },
        {
          model: Type,
          as: 'type',
          required: true,
          attributes: ['name'],
        },
      ],
    });
    if (qData != null) {
      return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    }
    return res.send(error('Data tidak ditemukan', res.statusCode, true));
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
