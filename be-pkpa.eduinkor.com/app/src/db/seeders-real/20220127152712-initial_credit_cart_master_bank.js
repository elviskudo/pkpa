/* eslint-disable no-unused-vars */

let arrData = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrData = [
      {
        type: 'cc',
        name: 'Visa',
        bank_code: 'VISA',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'cc',
        name: 'MasterCard',
        bank_code: 'MASTERCARD',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'cc',
        name: 'Xendit',
        bank_code: 'JCB',
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
