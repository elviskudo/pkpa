module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_option', 'abjad', Sequelize.CHAR(1));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_option', 'abjad');
  },
};
