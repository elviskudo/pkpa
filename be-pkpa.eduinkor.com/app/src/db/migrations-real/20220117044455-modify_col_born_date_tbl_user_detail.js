module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('user_details', 'born_date', {
      type: Sequelize.DATEONLY,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('user_details', 'born_date', {
      type: Sequelize.DATE,
    });
  },
};
