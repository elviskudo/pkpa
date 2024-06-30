/* eslint-disable no-unused-vars */

let arrData = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    arrData = [
      {
        name: 'Bahasa Indonesia',
        owner_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Bahasa Ingris',
        owner_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Matematika',
        owner_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('master_question_pmb_type', arrData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_question_pmb_type', null, {});
  },
};
