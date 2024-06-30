module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('package_content_course', 'is_publish', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('package_content_course', 'is_publish');
  },
};
