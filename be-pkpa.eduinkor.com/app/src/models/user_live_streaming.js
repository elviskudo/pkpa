module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('user_live_streaming', {
    student_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    live_streaming_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    screenshot: {
      type: DataTypes.STRING,
    },
    originalname: {
      type: DataTypes.STRING,
    },
    presence: {
      type: DataTypes.DATE,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.live_streaming, { as: 'user_ls', foreignKey: 'live_streaming_id' });
    defModel.belongsTo(models.student, { foreignKey: 'student_id' });
  };
  return defModel;
};
