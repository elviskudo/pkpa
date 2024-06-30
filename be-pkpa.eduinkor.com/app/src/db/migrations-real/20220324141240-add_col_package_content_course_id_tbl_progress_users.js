module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('progress_users', 'package_content_course_id', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('progress_users', 'package_content_course_id');
  },
};
