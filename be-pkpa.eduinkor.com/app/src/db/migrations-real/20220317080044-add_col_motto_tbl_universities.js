module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('universities', 'motto', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('universities', 'motto');
  },
};