module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('universities', 'vision', Sequelize.TEXT);
    await queryInterface.addColumn('universities', 'mission', Sequelize.TEXT);
    await queryInterface.addColumn('universities', 'goal', Sequelize.TEXT);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('universities', 'vision');
    await queryInterface.removeColumn('universities', 'mission');
    await queryInterface.removeColumn('universities', 'goal');
  },
};
