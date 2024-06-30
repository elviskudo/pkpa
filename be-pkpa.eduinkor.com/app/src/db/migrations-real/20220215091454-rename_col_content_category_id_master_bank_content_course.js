module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('master_bank_content_topic', 'content_category_id', 'topic_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('master_bank_content_topic', 'topic_id', 'content_category_id');
  },
};
