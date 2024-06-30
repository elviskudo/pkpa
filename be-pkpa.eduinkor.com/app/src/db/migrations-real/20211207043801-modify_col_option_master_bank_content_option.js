module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('master_bank_content_option', 'option', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('master_bank_content_option', 'option', {
      type: Sequelize.INTEGER,
    });
  },
};
