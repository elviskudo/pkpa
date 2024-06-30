const db = require('../models');
const { success, error } = require('../utils/response-api');

const District = db.districts;

const getDistrictById = async (req, res, next) => {
  try {
    const district = await District.findAll({
      where: {
        city_id: req.params.id,
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      order: [['id', 'ASC']],
    });
    // console.log(district);
    if (district != null) {
      return res.send(success('Kecamatan berhasil ditemukan', district, res.statusCode));
    }
    return res.status(404).send(error('Kecamatan tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getDistrictById,
};
