module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('phase_universities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      university_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      phase_no: {
        type: Sequelize.INTEGER,
      },
      register_period_start: {
        type: Sequelize.DATE,
      },
      register_period_end: {
        type: Sequelize.DATE,
      },
      learning_period_start: {
        type: Sequelize.DATE,
      },
      learning_period_end: {
        type: Sequelize.DATE,
      },
      system: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('phase_universities');
  },
};
