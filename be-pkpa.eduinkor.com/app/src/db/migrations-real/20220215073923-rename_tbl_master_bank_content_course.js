module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('master_bank_content_course', 'master_bank_content_topic');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('master_bank_content_topic', 'master_bank_content_course');
  },
};
