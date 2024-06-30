/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('show_courses', {
    package_content_course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    // defModel.belongsTo(models.users, {
    //   as: 'user',
    //   foreignKey: 'user_id',
    // });
  };
  return defModel;
};
