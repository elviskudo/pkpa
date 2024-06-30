module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('master_bank_content_type', 'is_active', 'is_active_content');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('master_bank_content_type', 'is_active_content', 'is_active');
  },
};
