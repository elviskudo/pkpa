module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_topic', 'quiz_type', Sequelize.BOOLEAN);
    await queryInterface.addColumn('master_bank_content_topic', 'is_random', Sequelize.BOOLEAN);
    await queryInterface.addColumn('master_bank_content_topic', 'is_commentary', Sequelize.BOOLEAN);
    await queryInterface.addColumn('master_bank_content_topic', 'min_value', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_content_topic', 'duration', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_content_topic', 'assesment_weight', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_content_topic', 'remidial_type', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_content_topic', 'limit_remidial_value', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_content_topic', 'is_skip', Sequelize.BOOLEAN);
    await queryInterface.addColumn('master_bank_content_topic', 'is_show_result', Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_topic', 'quiz_type', Sequelize.BOOLEAN);
    await queryInterface.removeColumn('master_bank_content_topic', 'is_random', Sequelize.BOOLEAN);
    await queryInterface.removeColumn('master_bank_content_topic', 'is_commentary', Sequelize.BOOLEAN);
    await queryInterface.removeColumn('master_bank_content_topic', 'min_value', Sequelize.INTEGER);
    await queryInterface.removeColumn('master_bank_content_topic', 'duration', Sequelize.INTEGER);
    await queryInterface.removeColumn('master_bank_content_topic', 'assesment_weight', Sequelize.INTEGER);
    await queryInterface.removeColumn('master_bank_content_topic', 'remidial_type', Sequelize.INTEGER);
    await queryInterface.removeColumn('master_bank_content_topic', 'limit_remidial_value', Sequelize.INTEGER);
    await queryInterface.removeColumn('master_bank_content_topic', 'is_skip', Sequelize.BOOLEAN);
    await queryInterface.removeColumn('master_bank_content_topic', 'is_show_result', Sequelize.BOOLEAN);
  },
};
