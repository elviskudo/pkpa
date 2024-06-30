module.exports = (sequelize, DataTypes) => {
  const masterQuestionPMB = sequelize.define('master_question_pmb', {
    question_pmb_type_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    is_active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  masterQuestionPMB.associate = (models) => {
    masterQuestionPMB.belongsTo(models.master_question_pmb_type, {
      as: 'question_type',
      foreignKey: 'question_pmb_type_id',
    });
    masterQuestionPMB.hasMany(models.master_score_pmb, {
      as: 'options',
      foreignKey: 'question_pmb_id',
    });
    masterQuestionPMB.hasMany(models.result_score_pmb, {
      as: 'result_score',
      foreignKey: 'question_pmb_id',
    });
  };
  return masterQuestionPMB;
};
