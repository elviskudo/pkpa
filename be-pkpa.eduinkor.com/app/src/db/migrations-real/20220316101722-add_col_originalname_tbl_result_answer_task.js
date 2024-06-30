module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('result_answers_tasks', 'originalname', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('result_answers_tasks', 'originalname');
  },
};
