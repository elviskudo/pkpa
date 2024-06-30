module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_content_topic', 'originalname', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_content_topic', 'originalname');
  },
};
