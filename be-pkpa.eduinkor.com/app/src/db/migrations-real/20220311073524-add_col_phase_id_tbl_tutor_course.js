module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tutor_courses', 'phase_id', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tutor_courses', 'phase_id');
  },
};
