module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user_live_streaming', 'presence', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_live_streaming', 'presence');
  },
};
