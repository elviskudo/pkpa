module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('user_live_streaming', 'user_id', 'student_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('user_live_streaming', 'student_id', 'user_id');
  },
};
