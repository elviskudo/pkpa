module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('result_answers_tasks', 'user_id', 'student_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('result_answers_tasks', 'student_id', 'user_id');
  },
};
