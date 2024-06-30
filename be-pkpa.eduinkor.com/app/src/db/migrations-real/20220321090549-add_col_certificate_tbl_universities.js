module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('universities', 'certificate', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('universities', 'certificate');
  },
};
