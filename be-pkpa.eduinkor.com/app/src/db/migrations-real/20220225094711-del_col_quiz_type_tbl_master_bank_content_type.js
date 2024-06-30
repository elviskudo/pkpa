module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_topic', 'quiz_type', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_topic', 'quiz_type', {
      type: Sequelize.BOOLEAN,
    });
  },
};
