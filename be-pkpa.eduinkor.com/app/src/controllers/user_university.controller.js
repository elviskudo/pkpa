const db = require('../models');
const { success, error } = require('../utils/response-api');

const UserUniversity = db.user_universities;
const PhaseUniversity = db.phase_universities;
const University = db.universities;

const createUserUniversity = async (req, res, next) => {
  try {
    const newData = {
      user_id: req.userId,
      phase_university_id: req.body.phase_university_id,
      status: req.body.status,
    };
    const newUserUniversity = await UserUniversity.create(newData);
    const data = {
      id: newUserUniversity.id,
    };
    // console.log(newPhaseUniversity);
    return res.send(success('Tambah User Universitas berhasil', data, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getUserUniversityById = async (req, res, next) => {
  try {
    const userUniversity = await UserUniversity.findOne({
      where: {
        user_id: req.userId,
        phase_university_id: req.params.phase_id,
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [
        {
          model: PhaseUniversity,
          required: true,
          include: [
            {
              model: University,
              as: 'university',
              required: true,
            },
          ],
        },
      ],
    });
    // console.log(userUniversity);
    // if (userUniversity != null) {
    return res.send(success('Universitas berhasil ditemukan', userUniversity, res.statusCode));
    // }
    // return res.status(404).send(error('Universitas tidak ditemukan', res.statusCode, true));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getHistoryPhaseUniversityUser = async (req, res, next) => {
  try {
    const q = 'select u.name as univ_name, pu."name" as phase_name, concat(extract(year from pu.learning_period_start), \' - \', extract(year from pu.learning_period_end)) as periode, \'LULUS\' as status \
      from user_universities uu \
        join phase_universities pu on uu.phase_university_id = pu.id \
        join universities u on pu.university_id = u.id \
      where uu.user_id = ? \
      order by uu.created_at desc;';

    const data = await db.sequelize.query(q, {
      replacements: [req.userId], type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(data);
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUserUniversity,
  getUserUniversityById,
  getHistoryPhaseUniversityUser,
};
