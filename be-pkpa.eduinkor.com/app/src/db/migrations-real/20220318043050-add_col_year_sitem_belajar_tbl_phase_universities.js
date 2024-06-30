module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('phase_universities', 'year', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('phase_universities', 'sistem_belajar', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('phase_universities', 'year');
    await queryInterface.removeColumn('phase_universities', 'sistem_belajar');
  },
};
