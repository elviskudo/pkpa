module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('admin_universities', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    university_id: {
      type: DataTypes.INTEGER,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.users, { as: 'admin_univ', foreignKey: 'user_id' });
    defModel.belongsTo(models.universities, { as: 'univ', foreignKey: 'university_id' });
    // defModel.hasMany(models.tutor_courses, { as: 'tc', foreignKey: 'admin_univ_id' });
    defModel.belongsToMany(models.master_bank_course, {
      through: 'tutor_courses',
      as: 'tc',
      foreignKey: 'admin_univ_id',
      otherKey: 'course_id',
    });
  };
  return defModel;
};
