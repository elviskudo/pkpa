module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('live_streaming', 'description', {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('live_streaming', 'description');
  },
};
