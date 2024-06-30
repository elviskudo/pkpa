module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('universities', 'slug', {
      type: Sequelize.STRING(25),
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn('universities', 'slug');
  },
};
