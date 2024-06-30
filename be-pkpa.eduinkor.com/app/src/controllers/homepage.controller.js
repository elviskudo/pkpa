/* eslint-disable camelcase */
const db = require('../models');
const { success, error } = require('../utils/response-api');
// const { getUniversity } = require('../utils/university');
const { upsert } = require('../utils/upsert');

const homepage = db.homepages;

const createHompage = async (req, res, next) => {
  console.log(req.body);
  try {
    const data = {};
    if (req.files.img_url) {
      data.img_url = req.files.img_url[0].location;
    }
    data.section_name = req.body.section_name;
    data.title = req.body.title;
    data.content = req.body.content;
    data.sub_content = req.body.sub_content;
    // data.img_url = req.body.img_url;
    data.is_publish = req.body.is_publish;
    data.owner_id = req.userId;
    console.log(data);
    const updateInsert = await upsert(homepage, { where: { id: req.body.id === '' ? null : req.body.id } }, data);
    console.log(updateInsert);
    if (!updateInsert.created) {
      return res.send(success('Update universitas berhasil', updateInsert, res.statusCode));
    }
    return res.send(success('Tambah universitas berhasil', updateInsert, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const createComponentHomepage = async (req, res, next) => {
  console.log(req.body);
  try {
    const data = {};
    if (req.files.img_url) {
      data.img_url = req.files.img_url[0].location;
    }
    data.section_name = req.body.section_name;
    data.title = req.body.title;
    data.sub_content = req.body.sub_content;
    // data.sub_content = req.body.sub_content;
    // data.img_url = req.body.img_url;
    // data.is_publish = req.body.is_publish;
    // data.owner_id = req.body.owner_id;
    console.log(data);
    const updateInsert = await upsert(homepage, { where: { id: req.body.id === '' ? null : req.body.id } }, data);
    console.log(updateInsert);
    if (!updateInsert.created) {
      return res.send(success('Update universitas berhasil', updateInsert, res.statusCode));
    }
    return res.send(success('Tambah universitas berhasil', updateInsert, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateHomepage = async (req, res, next) => {
  try {
    const data = {};
    if (req.files.img_url) {
      data.img_url = req.files.img_url[0].location;
    }
    data.section_name = req.body.section_name;
    data.title = req.body.title;
    data.content = req.body.content;
    data.sub_content = req.body.sub_content;
    data.img_url = req.body.img_url;
    data.is_publish = req.body.is_publish;
    data.owner_id = req.body.owner_id;
    const resultData = await homepage.update(data, {
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
    next(error);
  }
};

const getDataAll = async (req, res, next) => {
  const { section_name } = req.query;
  console.log(`Section name: ${section_name}`);
  let sec = '';
  if (section_name) {
    sec = 'where section_name= ?';
  }
  let data = [];
  try {
    if (section_name) {
      if (section_name == 'Testimonials') {
        const query = `select * from testimonials where is_publish = true`;
        data = await db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
        return res.send(success('Data berhasil ditemukan', data, res.statusCode));
      } else {
        const query = `select ROW_NUMBER() OVER(order by h.id) as no,* from homepages h ${sec}`;
        console.log(`query: ${query}`);
        data = await db.sequelize.query(query,
          { replacements: [section_name], type: db.sequelize.QueryTypes.SELECT });
        console.log(`data: ${data}`);
        return res.send(success('Data berhasil ditemukan', data, res.statusCode));
      }
    }
    const query = 'select * from homepages';
    data = await db.sequelize.query(query,
      { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

const getDatabyUniv = async (req, res, next) => {
  const { id } = req.params;
  const query = `select h.id, u.id as idUniv,h.section_name,h.title,h."content",
  h.sub_content,h.img_url,h.is_publish,h.owner_id
  from homepages h 
  join universities u on h.owner_id = u.id where u.id = ?`;
  let data = [];
  try {
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

const getDatabyId = async (req, res, next) => {
  const { id } = req.params;
  let data = [];
  try {
    const query = `select *
    from homepages h 
    where h.id = ?`;
    data = await db.sequelize.query(query,
      { replacements: [id], type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data tidak ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

module.exports = {
  getDataAll,
  createHompage,
  updateHomepage,
  getDatabyUniv,
  createComponentHomepage,
  getDatabyId,
};
