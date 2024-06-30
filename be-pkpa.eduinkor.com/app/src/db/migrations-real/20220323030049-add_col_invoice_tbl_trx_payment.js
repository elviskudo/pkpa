module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('trx_payment', 'invoice', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('trx_payment', 'invoice');
  },
};
