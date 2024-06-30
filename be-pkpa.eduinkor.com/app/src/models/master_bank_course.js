/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_course', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    background_image: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
    },
    is_forum: {
      type: DataTypes.BOOLEAN,
    },
    certificate: {
      type: DataTypes.STRING,
    },
    university_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    // defModel.hasMany(models.tutor_courses, { as: 'tutor_course', foreignKey: 'course_id', onDelete: 'cascade' });
    defModel.belongsToMany(models.admin_universities, {
      through: 'tutor_courses',
      as: 'tc',
      foreignKey: 'course_id',
      otherKey: 'admin_univ_id',
    });
    defModel.belongsTo(models.universities, { as: 'universities', foreignKey: 'university_id' });
    // eslint-disable-next-line max-len
    // defModel.hasMany(models.master_bank_content_topic, { foreignKey: 'content_category_id', as: 'category' });
    defModel.hasMany(models.master_bank_topic, { foreignKey: 'course_id', as: 'course', onDelete: 'cascade' });
    defModel.hasMany(models.live_streaming, { foreignKey: 'course_id', as: 'courses', onDelete: 'cascade' });
  };
  return defModel;
};
