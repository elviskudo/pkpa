/* eslint-disable camelcase */
const db = require('../models');

const dbModel = db.student;
const userUniv = db.user_universities;
const phaseUniv = db.phase_universities;
const univ = db.universities;

exports.createStudent = async (params) => {
  const { user_id } = params;
  const { phase_university_id } = params;
  try {
    // const where = {
    //   user_id,
    //   phase_university_id,
    //   status: 'paid',
    // };
    // const cStudent = await dbModel.count({ where });
    // if (cStudent > 0) {
    //   return false;
    // }
    // where.status = 'paid';
    // const qSelect = await userUniv.findOne({
    //   where,
    //   include: [{
    //     model: phaseUniv,
    //     required: true,
    //     include: {
    //       model: univ,
    //       as: 'university',
    //       required: true,
    //     },
    //   }],
    // });
    // const data = (JSON.parse(JSON.stringify(qSelect)));
    // console.log('========================================');
    // console.log(data);
    // console.log('========================================');
    // const { id } = data.phase_university;
    const phaseData = await phaseUniv.findByPk(phase_university_id);
    const qSelect2 = await dbModel.count({
      where: { phase_university_id },
      include: [{
        model: phaseUniv,
        as: 'pu',
        required: true,
        include: {
          model: univ,
          as: 'university',
          required: true,
        },
      }],
    });
    const d = new Date(phaseData.learning_period_start);
    const year = d.getFullYear();
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    const reg_no = year + zeroPad(phaseData.phase_no, 2)
      + zeroPad(qSelect2 + 1, 4);
    const pData = {
      user_id,
      // university_id,
      phase_university_id,
      reg_no,
    };
    const qData = await dbModel.create(pData);
    if (qData) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
