module.exports = (sequelize, DataTypes) => {
  const masterQuestionPMBType = sequelize.define('master_question_pmb_type', {
    name: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  masterQuestionPMBType.associate = (models) => {
    masterQuestionPMBType.hasMany(models.master_question_pmb, {
      foreignKey: 'question_pmb_type_id',
    });
  };
  return masterQuestionPMBType;
};
