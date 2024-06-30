module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_content_topic', {
    content_type_id: {
      type: DataTypes.INTEGER,
    },
    topic_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.TEXT,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
    access_limit: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    quiz_type: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    is_random: {
      type: DataTypes.BOOLEAN,
    },
    is_commentary: {
      type: DataTypes.BOOLEAN,
    },
    min_value: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    duration: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    assesment_weight: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    remidial_type: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    limit_remidial_value: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    is_skip: {
      type: DataTypes.BOOLEAN,
    },
    is_show_result: {
      type: DataTypes.BOOLEAN,
    },
    originalname: {
      type: DataTypes.STRING,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.master_bank_topic, { foreignKey: 'topic_id', as: 'topic' });
    defModel.belongsTo(models.master_bank_content_type, { foreignKey: 'content_type_id', as: 'type' });
    defModel.hasMany(models.master_bank_content_question, { foreignKey: 'content_topic_id', as: 'content_topic' });
  };
  return defModel;
};
