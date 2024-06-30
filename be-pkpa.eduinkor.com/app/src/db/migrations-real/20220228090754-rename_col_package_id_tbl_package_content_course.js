module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('package_content_course', 'package_id', 'phase_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('package_content_course', 'phase_id', 'package_id');
  },
};
