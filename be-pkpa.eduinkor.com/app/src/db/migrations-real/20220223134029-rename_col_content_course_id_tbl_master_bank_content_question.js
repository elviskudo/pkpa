module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('master_bank_content_question', 'content_course_id', 'content_topic_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('master_bank_content_question', 'content_topic_id', 'content_course_id');
  },
};
