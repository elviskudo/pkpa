/* eslint-disable no-unused-vars */

let arrData = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrData = [
      {
        type: 'va',
        name: 'BCA',
        bank_code: 'BCA',
        va_code: '7007015',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'BNI',
        bank_code: 'BNI',
        va_code: '8808',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'BRI',
        bank_code: 'BRI',
        va_code: '26215',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'Bank Mandiri',
        bank_code: 'MANDIRI',
        va_code: '88608',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'Bank Permata',
        bank_code: 'PERMATA',
        va_code: '8214',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'BSI',
        bank_code: 'BSI',
        va_code: '9347',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'BJB',
        bank_code: 'BJB',
        va_code: '1234',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'va',
        name: 'BSS',
        bank_code: 'BSS',
        va_code: '40102',
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
