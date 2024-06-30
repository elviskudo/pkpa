const db = require('../models');

const AdminUniversity = db.admin_universities;

exports.getUniversity = async (id) => {
  try {
    const data = await AdminUniversity.findOne({
      where: { user_id: id, is_active: true },
      attributes: ['university_id'],
    });
    return data.university_id;
  } catch (err) {
    console.log(err);
    return null;
  }
};
