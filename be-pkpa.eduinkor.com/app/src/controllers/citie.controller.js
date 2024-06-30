const db = require('../models');
const { success, error } = require('../utils/response-api');

const Citie = db.cities;

const getCitieById = async (req, res, next) => {
  try {
    const citie = await Citie.findAll({
      where: {
        state_id: req.params.id,
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      order: [['id', 'ASC']],
    });
    // console.log(citie);
    if (citie != null) {
      return res.send(success('Kota berhasil ditemukan', citie, res.statusCode));
    }
    return res.status(404).send(error('Kota tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getCitieById,
};
