module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('package_content_course', {
    phase_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    content_category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
    predecessor: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
  };
  return defModel;
};
