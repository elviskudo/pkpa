/* eslint-disable camelcase */
const dbModel = require('../models/nosql/user_activity');

exports.createData = async (params) => {
  try {
    // eslint-disable-next-line camelcase
    const { user_id } = params;
    // eslint-disable-next-line no-unused-vars
    const qDatafind = await dbModel.find({ user_id }).count();
    console.log(qDatafind);
    if (qDatafind > 0) {
      const { fullname } = params;
      // eslint-disable-next-line camelcase
      const { last_login } = params;
      // eslint-disable-next-line camelcase
      const { last_date } = params;
      const { progress } = params;
      const pData = {
        user_id,
        fullname,
        last_login,
        last_date,
        progress,
      };
      // const { id } = user_id;
      const filter = { user_id };
      // const qData = await dbModel.findByIdAndUpdate(user_id, pData); // returns Query
      const qData = await dbModel.findOneAndUpdate(filter, pData, {
        returnOriginal: false,
      });
      console.log(qData);
      if (qData) {
        return true;
      }
    } else {
      const { fullname } = params;
      // eslint-disable-next-line camelcase
      const { last_login } = params;
      // eslint-disable-next-line camelcase
      const { last_date } = params;
      const { progress } = params;
      const pData = {
        user_id,
        fullname,
        last_login,
        last_date,
        progress,
      };

      const qData = await dbModel.create(pData);
      if (qData) {
        return true;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.updateData = async (params) => {
  try {
    // eslint-disable-next-line camelcase
    const { user_id } = params;
    const { fullname } = params;
    // eslint-disable-next-line camelcase
    const { last_login } = params;
    // eslint-disable-next-line camelcase
    const { last_date } = params;
    const { progress } = 'progress';
    const pData = {
      user_id,
      fullname,
      last_login,
      last_date,
      progress,
    };
    const { id } = params;

    const qData = await dbModel.findByIdAndUpdate(id, pData); // returns Query
    if (qData) {
      return true;
    }
  } catch (err) {
    console.log(err);
    // next(err);
  }
};
