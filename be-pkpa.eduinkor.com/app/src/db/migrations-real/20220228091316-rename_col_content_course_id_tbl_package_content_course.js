module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('package_content_course', 'content_course_id', 'content_topic_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('package_content_course', 'content_topic_id', 'content_course_id');
  },
};
