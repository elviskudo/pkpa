module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING(255),
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
      },
      phone_no: {
        type: Sequelize.STRING(15),
      },
      wa_no: {
        type: Sequelize.STRING(15),
      },
      password: {
        type: Sequelize.STRING(100),
      },
      image_url: {
        type: Sequelize.STRING(255),
      },
      email_verified_at: {
        type: Sequelize.DATE,
      },
      token: {
        type: Sequelize.TEXT,
      },
      token_firebase: {
        type: Sequelize.TEXT,
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
