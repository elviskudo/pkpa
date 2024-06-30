module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('package_content_course_details', {
    package_content_course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    content_topic_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    order: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  defModel.associate = (models) => {
  };
  return defModel;
};
