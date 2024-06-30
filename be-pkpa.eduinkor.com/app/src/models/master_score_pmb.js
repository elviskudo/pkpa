module.exports = (sequelize, DataTypes) => {
  const masterScorePMB = sequelize.define('master_score_pmb', {
    question_pmb_id: {
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
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  masterScorePMB.associate = (models) => {
    masterScorePMB.belongsTo(models.master_question_pmb, {
      as: 'options',
      foreignKey: 'question_pmb_id',
    });
  };
  return masterScorePMB;
};
