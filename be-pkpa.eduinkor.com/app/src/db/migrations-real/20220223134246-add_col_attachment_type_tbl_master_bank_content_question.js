module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_question', 'attachment_type', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_content_question', 'url_question', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_question', 'attachment_type');
    await queryInterface.removeColumn('master_bank_content_question', 'url_question');
  },
};
