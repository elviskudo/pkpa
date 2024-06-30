/* eslint-disable consistent-return */
const db = require('../models');
const { success, error } = require('../utils/response-api');

const Countrie = db.countries;

const getCountrieById = async (req, res, next) => {
  try {
    const countrie = await Countrie.findAll({
      // where: {
      //   state_id: req.params.id,
      // },
    });
    console.log(countrie);
    if (countrie != null) {
      return res.send(success('User berhasil ditemukan', countrie, res.statusCode));
    }
    return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getCountrieById,
};
