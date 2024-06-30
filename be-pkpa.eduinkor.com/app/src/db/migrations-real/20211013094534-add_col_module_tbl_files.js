module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('files', 'module', Sequelize.STRING, {
      after: 'name',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('files', 'module');
  },
};
