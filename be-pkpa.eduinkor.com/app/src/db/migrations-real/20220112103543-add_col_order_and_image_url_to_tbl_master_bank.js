module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank', 'order', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank', 'image_url', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank', 'order');
    await queryInterface.removeColumn('master_bank', 'image_url');
  },
};
