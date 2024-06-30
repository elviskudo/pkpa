module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('tutor_courses', {
    admin_univ_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    // defModel.belongsTo(models.admin_universities, { as: 'tc', foreignKey: 'admin_univ_id' });
    // defModel.belongsTo(models.master_bank_course, { as: 'course', foreignKey: 'course_id' });
  };
  return defModel;
};
