/* eslint-disable camelcase */
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getUniversity } = require('../utils/university');

const PhaseUniversity = db.phase_universities;
const University = db.universities;

const createPhaseUniversity = async (req, res, next) => {
  try {
    const phaseuniversity = {
      university_id: req.body.university_id,
      name: req.body.name,
      phase_no: req.body.phase_no,
      register_period_start: req.body.register_period_start,
      register_period_end: req.body.register_period_end,
      learning_period_start: req.body.learning_period_start,
      learning_period_end: req.body.learning_period_end,
      system: req.body.system,
      slug: req.body.slug,
      is_active: req.body.is_active,
      year: req.body.year,
      sistem_belajar: req.body.sistem_belajar,
      status: req.body.status,
    };
    const newPhaseUniversity = await PhaseUniversity.create(phaseuniversity);
    const data = {
      id: newPhaseUniversity.id,
    };
    // console.log(newPhaseUniversity);
    if (newPhaseUniversity) {
      return res.send(success('Tambah universitas berhasil', data, res.statusCode));
    }
    return res.status(404).send(error('University tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};
const updatePhaseUniversity = async (req, res, next) => {
  const { id } = req.body.id;
  console.log(id);
  try {
    const phaseuniversity = {
      id: req.body.id,
      university_id: req.body.university_id,
      name: req.body.name,
      phase_no: req.body.phase_no,
      register_period_start: req.body.register_period_start,
      register_period_end: req.body.register_period_end,
      learning_period_start: req.body.learning_period_start,
      learning_period_end: req.body.learning_period_end,
      system: req.body.system,
      slug: req.body.slug,
      is_active: req.body.is_active,
      year: req.body.year,
      sistem_belajar: req.body.sistem_belajar,
      status: req.body.status,
    };
    console.log(phaseuniversity);
    const newPhaseUniversity = await PhaseUniversity.update(phaseuniversity, {
      where: {
        id: phaseuniversity.id,
      },
    });
    const data = {
      id,
    };
    if (newPhaseUniversity) {
      return res.send(success('Tambah universitas berhasil', data, res.statusCode));
    }
    return res.status(404).send(error('University tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getPhaseUniversityById = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { id } = req.params;
  // let { phasex } = '';
  try {
    console.log(id);
    const query = 'select  * \
    from phase_universities pu \
    where pu.id = :id;';
    const data = await db.sequelize.query(
      query, { replacements: { id }, type: db.sequelize.QueryTypes.SELECT },
    );
    console.log(data[0].phase + 1);
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getPhaseUniversityAll = async (req, res, next) => {
  const { university_id } = req.query;
  let data = [];
  try {
    if (university_id) {
      data = await PhaseUniversity.findAll({
        where: { university_id }, include: { model: University, as: 'university', require: true }, attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }, order: [['phase_no', 'ASC']],
      });
      return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
    }
    const q = 'select row_number() over(order by pu.id) as no,* from phase_universities pu';
    data = await db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT });
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getPhaseUniversitySettingUniv = async (req, res, next) => {
  let { university_id } = req.query;
  console.log(req.university_id);
  // let data = [];
  let data = '';
  let qUniv = '';
  if (req.roleName === 'admin') {
    // eslint-disable-next-line camelcase
    university_id = await getUniversity(req.userId);
  }
  // console.log(university_id);
  // eslint-disable-next-line camelcase
  if (university_id) {
    qUniv = ' where pu.university_id = ?';
  }
  try {
    const query = `select row_number() over(order by pu.id) as no,u."name" as univ,pu.id,pu.university_id,pu."name",
    pu.phase_no,pu.register_period_start,pu.register_period_end,pu.learning_period_start,pu.learning_period_end, 
    pu."system",pu.slug,pu.is_active,pu.created_at,pu.updated_at,pu.deleted_at,pu."module",pu.status,pu."year",pu.sistem_belajar 
    from phase_universities pu join universities u on pu.university_id =u.id  ${qUniv}`;
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
    console.log(data);
    return res.send(success('Data berhasil ditemukan', data, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getPhaseUnivCount = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { university_id } = req.params;
  // let { phasex } = '';
  try {
    console.log(university_id);
    const query = 'select  coalesce (max(phase_no) + 1,1) as phase \
    from phase_universities pu \
    where pu.university_id = :university_id;';
    const data = await db.sequelize.query(
      query, { replacements: { university_id }, type: db.sequelize.QueryTypes.SELECT },
    );
    console.log(data[0].phase + 1);
    if (data != null) {
      return res.send(success('Data berhasil ditemukan', data, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = {
  createPhaseUniversity,
  getPhaseUniversityById,
  getPhaseUnivCount,
  getPhaseUniversityAll,
  updatePhaseUniversity,
  getPhaseUniversitySettingUniv,
};
