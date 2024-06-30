/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const dbModel = db.master_bank_topic;
const Course = db.master_bank_course;
const University = db.universities;
// const User = db.users;
// const AdminUniv = db.admin_university;

const createData = async (req, res, next) => {
  const {
    name, course_id, description, is_publish,
  } = req.body;

  try {
    const pData = {
      name,
      course_id,
      description,
      is_publish,
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
    name, course_id, description, is_publish,
  } = req.body;
  try {
    const pData = {
      name,
      course_id,
      description,
      is_publish,
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
  const { course_id, university_id } = req.query;
  const where = {};
  if (course_id) {
    where.course_id = course_id;
  }
  try {
    let data = null;
    if (university_id) {
      data = await dbModel.findAll({
        where,
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: {
          required: true, model: Course, as: 'course', include: { model: University, as: 'universities', where: { id: university_id } },
        },
        order: [['createdAt', 'DESC']],
      });
    } else {
      data = await dbModel.findAll({
        where,
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: {
          required: true, model: Course, as: 'course', include: { model: University, as: 'universities' },
        },
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
      include: { model: Course, as: 'course', include: { model: University, as: 'universities' } },
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
