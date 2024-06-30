module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('trx_payment', 'phase_university_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('trx_payment', 'phase_university_id');
  },
};
