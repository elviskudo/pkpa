module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('package_content_course', 'predecessor', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('package_content_course', 'predecessor');
  },
};
