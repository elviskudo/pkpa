module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('result_answers_tasks', 'owner_id', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('result_answers_tasks', 'owner_id');
  },
};
