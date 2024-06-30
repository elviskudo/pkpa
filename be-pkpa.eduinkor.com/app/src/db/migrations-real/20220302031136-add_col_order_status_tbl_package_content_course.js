module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('package_content_course', 'order', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('package_content_course', 'status', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('package_content_course', 'order');
    await queryInterface.removeColumn('package_content_course', 'status');
  },
};
