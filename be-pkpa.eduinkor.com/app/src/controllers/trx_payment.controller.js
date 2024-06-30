/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const dbModel = db.trx_payment;
const Bank = db.master_bank;

const getDataById = async (req, res, next) => {
  try {
    const qData = await dbModel.findOne(
      {
        where: { trx_id: req.params.trx_id },
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [{
          model: Bank,
          as: 'bank',
          required: true,
          // attributes: ['id', 'name'],
        }],
      },
    );
    if (qData != null) {
      return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};
const getDataByUser = async (req, res, next) => {
  try {
    const qData = await dbModel.findAll(
      {
        where: { user_id: req.userId },
        attributes: { exclude: ['deletedAt'] },
        include: [{
          model: Bank,
          as: 'bank',
          required: true,
          attributes: ['id', 'name', 'image_url', 'type'],
        }],
        order: [['updated_at', 'desc']],
      },
    );
    if (qData != null) {
      return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDataById,
  getDataByUser,
};
