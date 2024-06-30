module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('student', 'user_university_id', 'user_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('student', 'user_id', 'user_university_id');
  },
};
