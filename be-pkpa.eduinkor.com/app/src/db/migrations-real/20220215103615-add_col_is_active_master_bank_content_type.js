module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_type', 'is_active', {
      type: Sequelize.BOOLEAN,
      defautValue: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_type', 'is_active');
  },
};
