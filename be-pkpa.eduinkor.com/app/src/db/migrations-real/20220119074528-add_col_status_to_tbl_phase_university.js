module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('phase_universities', 'status', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('phase_universities', 'status');
  },
};
