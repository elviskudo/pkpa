module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank_course', 'is_publish', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn('master_bank_course', 'is_forum', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn('master_bank_course', 'university_id', Sequelize.INTEGER);
    await queryInterface.addColumn('master_bank_course', 'certificate', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank_course', 'is_publish');
    await queryInterface.removeColumn('master_bank_course', 'is_forum');
    await queryInterface.removeColumn('master_bank_course', 'university_id');
    await queryInterface.removeColumn('master_bank_course', 'certificate');
  },
};
