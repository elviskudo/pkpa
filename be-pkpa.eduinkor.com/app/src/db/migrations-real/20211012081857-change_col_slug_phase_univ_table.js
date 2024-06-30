module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('phase_universities', 'slug', {
      type: Sequelize.STRING(25),
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn('phase_universities', 'slug');
  },
};
