module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('result_score_pmb', 'remidial_no', Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('result_score_pmb', 'remidial_no');
  },
};
