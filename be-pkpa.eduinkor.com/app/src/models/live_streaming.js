module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('live_streaming', {
    phase_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    event_datetime: {
      type: DataTypes.DATE,
    },
    link: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.master_bank_course, { as: 'courses', foreignKey: 'course_id' });
    defModel.belongsTo(models.phase_universities, { as: 'phase', foreignKey: 'phase_id' });
    defModel.hasMany(models.user_live_streaming, { as: 'user_ls', foreignKey: 'live_streaming_id' });
  };
  return defModel;
};
