/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const { getStudent } = require('../utils/student');
const db = require('../models');
const { upsert } = require('../utils/upsert');
const { success, error } = require('../utils/response-api');

const dbModel = db.history_access_contents;
// const PCCD = db.package_content_course_details;

const createData = async (req, res, next) => {
  const { content_topic_id, package_content_course_id } = req.body;
  const id = req.userId;
  console.log(`================== ${id} ===================`);
  try {
    const student_id = await getStudent(id);
    console.log(student_id);
    const pData = {
      student_id,
      content_topic_id,
      package_content_course_id,
    };

    const qData = await dbModel.create(pData);
    const newData = {
      id: qData.id,
    };
    return res.send(success('Update data berhasil', newData, res.statusCode));
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

const getCountDataByUser = async (req, res, next) => {
  const { content_topic_id, package_content_course_id } = req.query;
  console.log(req.query);
  try {
    console.log(content_topic_id);
    student_id = await getStudent(req.userId);
    const countData = await dbModel.count({
      where: { student_id, content_topic_id, package_content_course_id },
    });
    const data = { count: countData };
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
  getCountDataByUser,
};
