module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_course', 'lecture');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_course', 'lecture', Sequelize.STRING);
  },
};
