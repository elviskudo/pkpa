module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('student', 'university_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('student', 'university_id', Sequelize.INTEGER);
  },
};
