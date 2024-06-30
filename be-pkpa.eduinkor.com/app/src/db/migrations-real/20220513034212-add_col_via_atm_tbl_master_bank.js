module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('master_bank', 'via_atm', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('master_bank', 'via_internet_banking', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('master_bank', 'via_mobile_banking', {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('master_bank', 'via_atm');
    await queryInterface.removeColumn('master_bank', 'via_internet_banking');
    await queryInterface.removeColumn('master_bank', 'via_mobile_banking');
  },
};
