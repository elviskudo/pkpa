module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('user_live_streaming_clicks', {
    student_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    live_streaming_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.student, { as: 'student', foreignKey: 'student_id' });
  };
  return defModel;
};
