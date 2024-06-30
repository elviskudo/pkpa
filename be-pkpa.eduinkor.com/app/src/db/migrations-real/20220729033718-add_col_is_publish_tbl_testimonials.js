module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('testimonials', 'is_publish', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('testimonials', 'is_publish');
  },
};
