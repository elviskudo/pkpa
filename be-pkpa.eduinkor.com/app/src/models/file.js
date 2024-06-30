module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    module: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    originalname: {
      type: DataTypes.STRING,
    },
  }, {});
  files.associate = (models) => {
    files.belongsTo(models.users);
  };
  return files;
};
