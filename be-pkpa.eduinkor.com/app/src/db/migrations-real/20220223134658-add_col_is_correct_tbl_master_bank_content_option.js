module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_option', 'is_correct', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_option', 'is_correct');
  },
};
