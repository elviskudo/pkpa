/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');

let arrUser = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrUser = [
      {
        fullname: 'super admin',
        email: 'superadmin@inkorgroup.com',
        phone_no: '08111111111',
        wa_no: '08111111111',
        password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fullname: 'admin',
        email: 'admin@inkorgroup.com',
        phone_no: '08111111111',
        wa_no: '08111111111',
        password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fullname: 'user',
        email: 'user@inkorgroup.com',
        phone_no: '08111111111',
        wa_no: '08111111111',
        password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fullname: 'tutor',
        email: 'tutor@inkorgroup.com',
        phone_no: '08111111111',
        wa_no: '08111111111',
        password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fullname: 'dewan panelis',
        email: 'dewanpanelis@inkorgroup.com',
        phone_no: '08111111111',
        wa_no: '08111111111',
        password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', arrUser, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
