module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('show_courses', 'phase_id', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('show_courses', 'phase_id', {
      type: Sequelize.INTEGER,
    });
  },
};
