module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('package_content_course_details');
  },

  down: async (queryInterface, Sequelize) => {
  },
};
