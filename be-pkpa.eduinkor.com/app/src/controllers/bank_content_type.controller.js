/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const BankContentType = db.master_bank_content_type;

const createData = async (req, res, next) => {
  try {
    const pData = {
      name: req.body.name,
      description: req.body.description,
    };

    const qData = await BankContentType.create(pData);
    const newData = {
      id: qData.id,
      name: qData.name,
      description: qData.description,
    };

    return res.send(success('Tambah data berhasil', newData, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  try {
    const pData = {
      name: req.body.name,
      description: req.body.description,
      icon: req.body.icon,
    };
    const qData = await BankContentType.update(pData, {
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
    const qData = await BankContentType.destroy({
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
  const {
    is_active_content, is_active_attachment_type, is_active_question_type, parent_id,
  } = req.query;
  try {
    let where = {};
    if (is_active_content) {
      where = { is_active_content, parent_id: null };
    } else if (is_active_attachment_type) {
      where = { is_active_attachment_type };
    } else if (is_active_question_type) {
      where = { is_active_question_type };
    } else if (parent_id) {
      where = { parent_id };
    }
    const data = await BankContentType.findAll({ where, attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }, order: [['id', 'ASC']] });
    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  try {
    const qData = await BankContentType.findByPk(req.params.id, {
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
