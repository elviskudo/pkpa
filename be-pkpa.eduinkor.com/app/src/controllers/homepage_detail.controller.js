/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const db = require('../models');
const { success, error } = require('../utils/response-api');
// const { getUniversity } = require('../utils/university');
// const { upsert } = require('../utils/upsert');

const homepageDetail = db.homepage_details;
const homepage = db.homepages;

const createHomepageDetail = async (req, res, next) => {
  console.log(req.body);
  try {
    let sec = '';
    let datax = [];
    const data = {};
    data.section_name = req.body.section_name;
    data.title = req.body.title;
    const resultData = await homepage.update(data, {
      where: {
        id: req.body.id,
      },
    });
    console.log(resultData);
    sec = 'where hd.homepage_id= ?';
    const hpD = `select h.id,hd.id as id_d,h.section_name,hd."name",hd.value 
    from homepages h join homepage_details hd on h.id = hd.homepage_id ${sec}`;
    // console.log(hpD);
    datax = await db.sequelize.query(hpD,
      { replacements: [req.body.id], type: db.sequelize.QueryTypes.SELECT });
    // console.log(datax[0]);
    for (let i = 0; i < datax.length; i++) {
      // console.log(datax[i].name);
      if (datax[i].name === 'Email') {
        const dataEmail = {};
        dataEmail.value = req.body.emailValue;
        await homepageDetail.update(dataEmail, {
          where: {
            id: datax[i].id_d,
          },
        });
      }
      if (datax[i].name === 'Telepon') {
        const dataTlp = {};
        dataTlp.value = req.body.teleponValue;
        await homepageDetail.update(dataTlp, {
          where: {
            id: datax[i].id_d,
          },
        });
      }
      if (datax[i].name === 'Link Google Maps') {
        const dataLink = {};
        dataLink.value = req.body.linkGmapValue;
        await homepageDetail.update(dataLink, {
          where: {
            id: datax[i].id_d,
          },
        });
      }
      if (datax[i].name === 'Alamat') {
        const dataAlamat = {};
        dataAlamat.value = req.body.alamatValue;
        await homepageDetail.update(dataAlamat, {
          where: {
            id: datax[i].id_d,
          },
        });
      }
    }
    return res.send(success('Tambah universitas berhasil', resultData, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getDataAll = async (req, res, next) => {
  const { section_name } = req.query;
  console.log(section_name);
  let sec = '';
  if (section_name) {
    sec = 'where section_name= ?';
  }
  let data = [];
  try {
    if (section_name) {
      const query = `select h.id,h.section_name,hd."name",hd.value 
      from homepages h join homepage_details hd on h.id = hd.homepage_id ${sec}`;
      data = await db.sequelize.query(query,
        { replacements: [section_name], type: db.sequelize.QueryTypes.SELECT });
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    const query = 'select * from homepage_details';
    data = await db.sequelize.query(query,
      { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(error);
  }
};

module.exports = {
  getDataAll,
  createHomepageDetail,
};
