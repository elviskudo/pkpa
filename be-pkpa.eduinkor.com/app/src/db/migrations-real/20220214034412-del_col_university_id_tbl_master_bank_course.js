module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_course', 'university_id', Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_course', 'university_id');
  },
};
