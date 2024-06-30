module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('package_content_course', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      package_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      content_course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      content_category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      owner_id: {
        type: Sequelize.INTEGER,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('package_content_course');
  },
};
