module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_type', 'parent_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('master_bank_content_type', 'is_active_attachment_type', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('master_bank_content_type', 'is_active_question_type', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_type', 'parent_id');
    await queryInterface.removeColumn('master_bank_content_type', 'is_active_attachment_type');
    await queryInterface.removeColumn('master_bank_content_type', 'is_active_question_type');
  },
};
