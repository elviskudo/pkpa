/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');

const dbModel = db.master_bank_content_category;
const { Op } = db.Sequelize;

const createData = async (req, res, next) => {
  try {
    const pData = {
      name: req.body.name,
      description: req.body.description,
      is_active: req.body.is_active,
      owner_id: req.userId,
    };
    const count = await dbModel.count();
    pData.order = count + 1;

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
    name, is_active, order,
  } = req.body;
  const pOrder = parseInt(order, 10);
  try {
    const pData = {
      id: req.params.id,
      name,
      is_active,
      owner_id: req.userId,
      order,
    };
    const getData = await dbModel.findByPk(req.params.id);
    let varGt;
    let varLt;

    if (getData.order > pOrder) {
      varGt = getData.order;
      varLt = pOrder;
    } else {
      varGt = pOrder;
      varLt = getData.order;
    }
    const allData = await dbModel.findAll({
      where: {
        [Op.and]: [
          { order: { [Op.between]: [varLt, varGt] } },
          { order: { [Op.not]: null } },
        ],
      },
      order: [['order', 'asc']],
    });
    const arrItem = [
      pData,
    ];
    for (let i = 0; i < allData.length; i++) {
      const items = {};
      // eslint-disable-next-line eqeqeq
      if (allData[i].id !== parseInt(req.params.id, 10)) {
        if (order > getData.order) {
          if (allData[i].order > order) {
            items.id = allData[i].id;
            items.name = allData[i].name;
            items.is_active = allData[i].is_active;
            items.owner_id = req.userId;
            items.order = allData[i].order + 1;
          } else {
            items.id = allData[i].id;
            items.name = allData[i].name;
            items.is_active = allData[i].is_active;
            items.owner_id = req.userId;
            items.order = allData[i].order - 1;
          }
          arrItem.push(items);
        } else {
          if (allData[i].order < order) {
            items.id = allData[i].id;
            items.name = allData[i].name;
            items.is_active = allData[i].is_active;
            items.owner_id = req.userId;
            items.order = allData[i].order - 1;
          } else {
            items.id = allData[i].id;
            items.name = allData[i].name;
            items.is_active = allData[i].is_active;
            items.owner_id = req.userId;
            items.order = allData[i].order + 1;
          }
          arrItem.push(items);
        }
      }
    }
    console.log(arrItem);
    await dbModel.bulkCreate(
      arrItem,
      {
        updateOnDuplicate: ['name', 'is_active', 'order', 'owner_id'],
      },
    );
    return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
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
    const data = await dbModel.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }, order: [['order', 'asc']] });
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

// const getCountOrder = async (req, res, next) => {
//   try {
//     const qData = await dbModel.count();
//     console.log(qData);
//     const data = {
//       count: qData,
//     };
//     if (qData != null) {
//       return res.send(success('Data berhasil ditemukan', data, res.statusCode));
//     }
//     return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  createData,
  updateData,
  deleteData,
  getAllData,
  getDataById,
  // getCountOrder,
};
