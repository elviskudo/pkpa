module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'remidial_to', Sequelize.INTEGER);
    await queryInterface.addColumn('users', 'pass_exam_pmb', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'remidial_to');
    await queryInterface.removeColumn('users', 'pass_exam_pmb');
  },
};
