module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('admin_university');
  },

  down: async (queryInterface, Sequelize) => {
  },
};
