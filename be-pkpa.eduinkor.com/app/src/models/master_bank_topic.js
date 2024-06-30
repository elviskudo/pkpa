/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_topic', {
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.master_bank_course, {
      as: 'course',
      foreignKey: 'course_id',
    });
    defModel.hasMany(models.master_bank_content_topic, { foreignKey: 'topic_id', as: 'topic', onDelete: 'cascade' });
    // eslint-disable-next-line max-len
    // defModel.hasMany(models.master_bank_content_topic, { foreignKey: 'content_category_id', as: 'category' });
  };
  return defModel;
};
