const db = require('../models');
const { success, error } = require('../utils/response-api');

const States = db.states;

const getStateAll = async (req, res, next) => {
  try {
    const states = await States.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      order: [['id', 'ASC']],
    });
    // console.log(states);
    if (states != null) {
      return res.send(success('Propinsi berhasil ditemukan', states, res.statusCode));
    }
    return res.status(404).send(error('Propinsi tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getStateById = async (req, res, next) => {
  try {
    const states = await States.findOne({
      where: {
        country_id: req.params.id,
      },
    });
    // console.log(states);
    if (states != null) {
      return res.send(success('User berhasil ditemukan', states, res.statusCode));
    }
    return res.status(404).send(error('User tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = {
  getStateAll,
  getStateById,
};
