module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user_details', 'accreditation_faculty', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_details', 'accreditation_faculty');
  },
};
