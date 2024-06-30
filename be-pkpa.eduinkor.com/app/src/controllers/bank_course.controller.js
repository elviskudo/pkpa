/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getUniversity } = require('../utils/university');

const dbModel = db.master_bank_course;
const University = db.universities;
// const User = db.users;
// const TutorCourse = db.tutor_courses;

const createData = async (req, res, next) => {
  const {
    name, description, is_forum, is_publish, university_id,
  } = req.body;
  try {
    const pData = {};
    if (req.files.background_image) {
      pData.background_image = req.files.background_image[0].location;
    }

    if (req.files.certificate) {
      pData.certificate = req.files.certificate[0].location;
    }

    pData.name = name;
    pData.description = description;
    pData.owner_id = req.userId;
    pData.is_forum = is_forum;
    pData.is_publish = is_publish;
    pData.university_id = university_id;

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
    name, description, is_forum, is_publish, university_id,
  } = req.body;
  try {
    const pData = {};
    if (typeof req.files !== 'undefined') {
      if (req.files.background_image) {
        pData.background_image = req.files.background_image[0].location;
      }

      if (req.files.certificate) {
        pData.certificate = req.files.certificate[0].location;
      }
    }

    pData.name = name;
    pData.description = description;
    pData.owner_id = req.userId;
    pData.is_forum = is_forum;
    pData.is_publish = is_publish;
    pData.university_id = university_id;
    console.log(pData);
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
  // let user = await cache.getAsync('user-creator-list');
  // console.log('Data from cache', user);

  // if (user) {
  // eslint-disable-next-line max-len
  //   return res.send(success('User berhasil ditemukan', { source: 'Redis', user: JSON.parse(user) }, res.statusCode));
  // }
  let { university_id } = req.query;
  const { phase_id } = req.query;
  if (req.roleName === 'admin') {
    university_id = await getUniversity(req.userId);
  }
  let data = [];
  console.log(`============ phase id: ${phase_id} =============== university id: ${university_id}`);
  try {
    if (phase_id && university_id) {
      data = await dbModel.findAll({
        where: {
          id: { [db.Sequelize.Op.notIn]: [db.Sequelize.literal(`select course_id from package_content_course pcc where phase_id = ${phase_id}`)] },
          is_publish: true,
          university_id,
        },
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [{
          model: University,
          as: 'universities',
          required: true,
          attributes: ['name'],
        }],
        order: [
          ['name', 'ASC'],
        ],
      });
    } else if (university_id) {
      data = await dbModel.findAll({
        where: { university_id, is_publish: true },
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [{
          model: University,
          as: 'universities',
          required: true,
          attributes: ['name'],
        }],
        order: [
          ['id', 'ASC'],
        ],
      });
    } else {
      data = await dbModel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [{
          model: University,
          as: 'universities',
          required: true,
          attributes: ['name'],
        }],
        order: [
          ['createdAt', 'DESC'],
        ],
      });
    }
    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
    return res.send(success('Data berhasil ditemukanss', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const qData = await dbModel.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: {
        model: University, as: 'universities', attributes: ['id', 'name'],
      },
    });
    return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
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
