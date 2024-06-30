module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_content_type', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    parent_id: {
      type: DataTypes.INTEGER,
    },
    is_active_content: {
      type: DataTypes.BOOLEAN,
      defautValue: false,
    },
    is_active_attachment_type: {
      type: DataTypes.BOOLEAN,
      defautValue: false,
    },
    is_active_question_type: {
      type: DataTypes.BOOLEAN,
      defautValue: false,
    },
    is_active_quiz_type: {
      type: DataTypes.BOOLEAN,
      defautValue: false,
    },
    icon: {
      type: DataTypes.STRING,
    },
    is_remidial_type: {
      type: DataTypes.BOOLEAN,
      defautValue: false,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.hasMany(models.master_bank_content_topic, { foreignKey: 'content_type_id' });
    defModel.hasMany(models.master_bank_content_question, { foreignKey: 'content_type_id' });
  };
  return defModel;
};
