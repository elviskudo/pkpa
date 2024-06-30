module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('student', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    phase_university_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    // university_id: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    // },
    reg_no: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.users, { as: 'student', foreignKey: 'user_id' });
    defModel.belongsTo(models.phase_universities, { as: 'pu', foreignKey: 'phase_university_id' });
    defModel.hasMany(models.user_live_streaming, { foreignKey: 'student_id' });
    defModel.hasMany(models.result_answers, { foreignKey: 'student_id' });
    defModel.hasMany(models.result_answers_tasks, { foreignKey: 'student_id' });
  };
  return defModel;
};
