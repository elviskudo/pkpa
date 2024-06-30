module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tutor_courses');
  },

  down: async (queryInterface, Sequelize) => {
  },
};
