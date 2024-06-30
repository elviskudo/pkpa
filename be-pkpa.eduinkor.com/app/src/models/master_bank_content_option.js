/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_content_option', {
    content_question_id: {
      type: DataTypes.INTEGER,
    },
    content_type_id: {
      type: DataTypes.INTEGER,
    },
    option: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.INTEGER,
    },
    abjad: {
      type: DataTypes.CHAR,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.master_bank_content_question, { foreignKey: 'content_question_id', as: 'option_content_question' });
  };
  return defModel;
};
