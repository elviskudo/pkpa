/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('progress_users', {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content_topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    package_content_course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  defModel.associate = (models) => {
    // eslint-disable-next-line max-len
    // defModel.hasMany(models.master_bank_content_topic, { foreignKey: 'content_category_id', as: 'category' });
  };
  return defModel;
};
