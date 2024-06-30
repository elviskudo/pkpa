module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_package', 'description', Sequelize.TEXT);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_package', 'description');
  },
};
