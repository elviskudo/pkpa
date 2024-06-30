module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_course', 'tutor_id', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_course', 'tutor_id', {
      type: Sequelize.INTEGER,
    });
  },
};
