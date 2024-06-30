/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const dbModel = require('../models/nosql/notification');
const { success } = require('../utils/response-api');

const createData = async (req, res, next) => {
  try {
    const pData = {
      user_id: req.body.user_id,
      title: req.body.title,
      message: req.body.message,
      url: req.body.url,
      status: req.body.status,
      is_read: req.body.is_read,
    };

    const qData = await dbModel.create(pData);
    const newData = qData;
    // const newData = {
    //   id: qData.id,
    //   name: qData.name,
    //   description: qData.description,
    // };

    return res.send(success('Tambah data berhasil', newData, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getCountData = async (req, res, next) => {
  const id = req.userId;
  const { is_read } = req.query;
  console.log(id);
  try {
    const countData = await dbModel.find({ user_id: id, is_read }).count();
    // console.log(countData);
    return res.send(success('Jumlah data', countData, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  try {
    const pData = {
      title: req.body.title,
      message: req.body.message,
      url: req.body.url,
      status: req.body.status,
      is_read: req.body.is_read,
    };
    const { id } = req.params;

    await dbModel.findByIdAndUpdate(id, pData); // returns Query
    return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;

    await dbModel.findByIdAndDelete(id); // returns Query
    return res.send(success('Hapus data berhasil', { id: req.params.id }, res.statusCode));
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
    const data = await dbModel.find();
    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataByUser = async (req, res, next) => {
  const id = req.userId;
  try {
    // const pFind = { user_id: req.userId };
    // console.log(req.userId);
    const qData = await dbModel.find({ user_id: id });
    // if (qData != null) {
    return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    // }
    // return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getCountNotificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const qData = await dbModel.find({ user_id: id }).count();
    return res.send(success('Total Data', qData, res.statusCode));
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createData,
  updateData,
  deleteData,
  getAllData,
  getDataByUser,
  getCountNotificationById,
  getCountData,
};
