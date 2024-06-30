module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'phone_no', {
      type: Sequelize.STRING(25),
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn('users', 'phone_no');
  },
};
