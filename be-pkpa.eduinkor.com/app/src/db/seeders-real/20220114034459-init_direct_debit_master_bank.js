/* eslint-disable no-unused-vars */

let arrData = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrData = [
      {
        type: 'direct_debit',
        name: 'Bank BRI',
        bank_code: 'DC_BRI',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'direct_debit',
        name: 'BCA OneKlik',
        bank_code: 'BCA_ONEKLIK',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('master_bank', arrData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_bank', null, {});
  },
};
