/* eslint-disable no-unused-vars */

let arrData = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrData = [
      {
        name: 'video',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'quiz',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'task',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'exam',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'image',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'text',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'training',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('master_bank_content_type', arrData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_bank_content_type', null, {});
  },
};
