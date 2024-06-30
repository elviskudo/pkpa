const db = require('../models');

const UserUniversity = db.user_universities;

exports.invoice = async (id) => {
  try {
    const q = `select pu.id as phase_id, university_id 
    from phase_universities pu
      inner join universities u on pu.university_id = u.id
    where pu.id = ? limit 1;`;
    const result = await db.sequelize.query(q, {
      replacements: [id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    const result2 = await UserUniversity.count({ where: { phase_university_id: id } });
    console.log(result2);
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    const currYear = new Date().getFullYear();
    const newCurrYear = currYear.toString().substring(2);
    const universityId = zeroPad(result[0].university_id, 2);
    const phaseId = zeroPad(result[0].phase_id, 2);
    const orderId = zeroPad(result2, 4);
    const inv = `${newCurrYear}.INV.${universityId}.${phaseId}.${orderId}`;
    console.log(inv);
    return inv;
  } catch (err) {
    console.log(err);
    return null;
  }
};
