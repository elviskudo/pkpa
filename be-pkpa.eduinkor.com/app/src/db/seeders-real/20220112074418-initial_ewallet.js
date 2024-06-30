/* eslint-disable no-unused-vars */

let arrData = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrData = [
      {
        type: 'ewallet',
        name: 'OVO',
        bank_code: 'ID_OVO',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'ewallet',
        name: 'DANA',
        bank_code: 'ID_DANA',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'ewallet',
        name: 'LINK AJA',
        bank_code: 'ID_LINKAJA',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'ewallet',
        name: 'SHOPEE PAY',
        bank_code: 'ID_SHOPEEPAY',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'ewallet',
        name: 'SAKUKU',
        bank_code: 'ID_SAKUKU',
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
