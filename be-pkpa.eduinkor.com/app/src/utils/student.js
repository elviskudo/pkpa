const db = require('../models');

exports.getStudent = async (id) => {
  try {
    const q = `select id
    from (
          select s.*, row_number() over (partition by user_id order by ID desc) as rn
           from student s 
          ) as t
    where t.rn = 1 and t.user_id = ?;`;
    const data = await db.sequelize.query(q, {
      replacements: [id], type: db.sequelize.QueryTypes.SELECT,
    });
    return data[0].id;
  } catch (err) {
    console.log(err);
    return null;
  }
};
