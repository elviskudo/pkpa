/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const dbModel = db.master_bank_content_option;

const createData = async (req, res, next) => {
  try {
    const pData = {
      content_question_id: req.body.content_question_id,
      content_type_id: req.body.content_type_id,
      option: req.body.option,
      value: req.body.value,
      abjad: req.body.abjad,
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
  try {
    const pData = {
      content_question_id: req.body.content_question_id,
      content_type_id: req.body.content_type_id,
      option: req.body.option,
      value: req.body.value,
      abjad: req.body.abjad,
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