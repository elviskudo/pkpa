module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user_details', 'is_work', Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_details', 'is_work');
  },
};
