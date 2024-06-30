const moment = require('moment');

exports.formatMoment = (dt = '') => {
  if (dt === '') {
    return moment().locale('id').format('DD MMMM YYYY HH:mm:ss');
  }
  return moment(dt).locale('id').format('DD MMMM YYYY HH:mm:ss');
};
