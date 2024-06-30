/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const cloudinary = require('cloudinary').v2;
// const streamifier = require('streamifier');
// const { where } = require('sequelize/types');
const { body } = require('express-validator');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getUniversity } = require('../utils/university');

const University = db.universities;
const { Op } = db.Sequelize;

const createUniversity = async (req, res, next) => {
  try {
    const data = {};
    if (req.files.image_university) {
      data.image_url = req.files.image_university[0].location;
    }
    if (req.files.logo_university) {
      data.logo_url = req.files.logo_university[0].location;
    }

    data.name = req.body.name;
    data.description = req.body.description;
    data.slug = req.body.slug;
    data.is_active = req.body.is_active;
    data.order = req.body.order;
    data.vision = req.body.vision;
    data.mission = req.body.mission;
    data.goal = req.body.goal;
    data.motto = req.body.motto;
    data.certificate = req.body.certificate;
    // console.log(data);
    const newUniversity = await University.create(data);
    const univ = {
      id: newUniversity.id,
    };

    return res.send(success('Tambah universitas berhasil', univ, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateUniversity = async (req, res, next) => {
  try {
    const data = {};
    if (typeof req.files !== 'undefined') {
      if (req.files.image_university) {
        data.image_url = req.files.image_university[0].location;
      }
      if (req.files.logo_university) {
        data.logo_url = req.files.logo_university[0].location;
      }
      if (req.files.certificate) {
        data.certificate = req.files.certificate[0].location;
      }
    }
    data.name = req.body.name;
    data.description = req.body.description;
    data.slug = req.body.slug;
    data.is_active = req.body.is_active;
    data.order = req.body.order;
    data.vision = req.body.vision;
    data.mission = req.body.mission;
    data.goal = req.body.goal;
    data.motto = req.body.motto;
    // data.certificate = req.body.certificate;

    const resultData = await University.update(data, {
      where: {
        id: req.params.id,
      },
    });
    console.log(resultData);
    if (resultData > 0) {
      return res.send(success('Update university berhasil', { idUniversity: req.params.id }, res.statusCode));
    }
    return res.status(404).send(error('Update university gagal. university tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

// const deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (user > 0) {
//       return res.send(success('Hapus user berhasil', { idUser: req.params.id }, res.statusCode));
//     }
//     return res.status(404).send(error('Hapus user gagal. User tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

const getAllUniversity = async (req, res, next) => {
  let university = await cache.getAsync('university-list');
  const { slug } = req.query;
  try {
    if (slug) {
      const data = await University.findAll({ where: { slug } });
      return res.send(success('University berhasil ditemukan', { source: 'Database', universities: data }, res.statusCode));
    }
    university = await University.findAll();
    const cacheResponse = await cache.setAsync('university-list', JSON.stringify(university));
    console.log(cacheResponse);
    return res.send(success('University berhasil ditemukan', { source: 'Database', universities: university }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataSettingUniv = async (req, res, next) => {
  // console.log('test');
  // eslint-disable-next-line camelcase
  let { university_id } = req.query;
  let data = '';
  let qUniv = '';
  if (req.roleName === 'admin') {
    // eslint-disable-next-line camelcase
    university_id = await getUniversity(req.userId);
  }
  // eslint-disable-next-line camelcase
  if (university_id) {
    qUniv = ' where id = ?';
  }
  try {
    const query = `select * from universities ${qUniv}`;
    if (req.roleName === 'admin') {
      data = await db.sequelize.query(query, {
        // eslint-disable-next-line camelcase
        replacements: [university_id], type: db.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await db.sequelize.query(
        query, { type: db.sequelize.QueryTypes.SELECT },
      );
    }
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getUversityById = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const university = await University.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (university) {
      return res.send(success('University berhasil ditemukan', university, res.statusCode));
    }
    return res.status(404).send(error('University tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

// const getUversityBySlug = async (req, res, next) => {
//   console.log(req.params.slug);
//   try {
//     const university = await University.findOne({
//       where: {
//         slug: req.params.slug,
//       },
//     });
//     if (university) {
//       return res.send(success('University berhasil ditemukan', university, res.statusCode));
//     }
//     return res.status(404).send(error('University tidak ditemukan', res.statusCode, true));
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };
const updateOrderUniv = async (req, res, next) => {
  try {
    const { itemstp } = req.body;
    // console.log(itemstp);
    const pDetail = JSON.parse(itemstp);
    const data = {};
    pDetail.forEach(async (item) => {
      data.order = item.order;
      console.log(item.order);
      await University.update(data, {
        where: {
          id: item.id,
        },
      });
    });
    return res.send(success('Tambah data berhasil', res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createUniversity,
  updateUniversity,
  getDataSettingUniv,
  getAllUniversity,
  getUversityById,
  updateOrderUniv,
  // getUser,
  // getUversityBySlug,
};
