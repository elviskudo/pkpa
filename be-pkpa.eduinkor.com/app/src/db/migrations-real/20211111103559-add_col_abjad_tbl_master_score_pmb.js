module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_score_pmb', 'abjad', Sequelize.CHAR(1));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_score_pmb', 'abjad');
  },
};
