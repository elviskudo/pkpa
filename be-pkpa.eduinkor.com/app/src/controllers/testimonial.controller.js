/* eslint-disable camelcase */
const db = require('../models');
const { success, error } = require('../utils/response-api');
// const { getUniversity } = require('../utils/university');
// const { upsert } = require('../utils/upsert');

const testi = db.testimonials;

const createTestimonial = async (req, res, next) => {
  console.log(req.body);
  try {
    const data = {};
    data.user_id = req.body.user_id;
    data.content = req.body.content;
    data.is_publish = req.body.is_publish;
    console.log(data);
    await testi.create(data);
    return res.send(success('Tambah testimonial berhasil', data, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const UpdateTestimonial = async (req, res, next) => {
  console.log(req.body);
  try {
    const data = {};
    data.user_id = req.body.user_id;
    data.content = req.body.content;
    data.is_publish = req.body.is_publish;
    console.log(data);
    const resultData = await testi.update(data, {
      where: {
        user_id: req.body.user_id,
      },
    });
    console.log(resultData);
    if (resultData > 0) {
      return res.send(success('Update university berhasil', { idTestimonial: req.body.user_id }, res.statusCode));
    }
    return res.status(404).send(error('Update university gagal. university tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getDataAll = async (req, res, next) => {
  let data = [];
  try {
    const query = 'select * from testimonials';
    data = await db.sequelize.query(query,
      { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

const getDatabyId = async (req, res, next) => {
  const { id } = req.params;
  let data = [];
  try {
    const query = 'select * from testimonials t where t.user_id = ?';
    data = await db.sequelize.query(query,
      { replacements: [id], type: db.sequelize.QueryTypes.SELECT });
    if (data.length > 0) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.send(success('Data tidak ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

const getDataTestimonial = async (req, res, next) => {
  let data = [];
  try {
    const query = `select u.id, ud.user_id, u.fullname, ud.city_id, t."content" ,c."name", 
    t.is_publish 
    from users u 
    join user_details ud on u.id = ud.user_id 
    join testimonials t on u.id = t.user_id 
    join cities c on c.id = ud.city_id `;
    data = await db.sequelize.query(query,
      { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

const getDataUserTesti = async (req, res, next) => {
  let data = [];
  try {
    const query = `select u.id,u.fullname 
    from users u join user_role ur 
    on u.id = ur.user_id 
    join roles r on r.id = ur.role_id 
    where name='user' 
    order by u.id`;
    data = await db.sequelize.query(query,
      { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

module.exports = {
  getDataAll,
  getDataTestimonial,
  createTestimonial,
  getDataUserTesti,
  getDatabyId,
  UpdateTestimonial,
};
