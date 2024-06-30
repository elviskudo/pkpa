module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_content_question', {
    content_type_id: {
      type: DataTypes.INTEGER,
    },
    content_topic_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    explain: {
      type: DataTypes.TEXT,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    attachment_type: {
      type: DataTypes.INTEGER,
    },
    url_question: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.master_bank_content_type, { foreignKey: 'content_type_id', as: 'type' });
    defModel.belongsTo(models.master_bank_content_topic, { foreignKey: 'content_topic_id', as: 'content_topic' });
    defModel.hasMany(models.master_bank_content_option, { foreignKey: 'content_question_id', as: 'option_content_question', onDelete: 'cascade' });
  };
  return defModel;
};
