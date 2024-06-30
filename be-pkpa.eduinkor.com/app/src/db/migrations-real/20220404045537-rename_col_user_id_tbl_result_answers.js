module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('result_answers', 'user_id', 'student_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('result_answers', 'student_id', 'user_id');
  },
};
