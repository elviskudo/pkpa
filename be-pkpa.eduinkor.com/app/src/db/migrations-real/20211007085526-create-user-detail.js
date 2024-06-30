/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING(1),
      },
      born_place: {
        type: Sequelize.STRING,
      },
      born_date: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      rt: {
        type: Sequelize.INTEGER,
      },
      rw: {
        type: Sequelize.INTEGER,
      },
      village: {
        type: Sequelize.STRING,
      },
      district_id: {
        type: Sequelize.INTEGER,
      },
      city_id: {
        type: Sequelize.INTEGER,
      },
      state_id: {
        type: Sequelize.INTEGER,
      },
      country_id: {
        type: Sequelize.INTEGER,
      },
      zip_code: {
        type: Sequelize.STRING(10),
      },
      university: {
        type: Sequelize.STRING,
      },
      accreditation: {
        type: Sequelize.STRING(1),
      },
      ipk: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('user_details');
  },
};
