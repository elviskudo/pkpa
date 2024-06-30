module.exports = (sequelize, DataTypes) => {
  const resultScorePMB = sequelize.define('result_score_pmb', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question_pmb_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    value_answer: {
      type: DataTypes.INTEGER,
    },
    remidial_no: {
      type: DataTypes.INTEGER,
    },
  }, {});
  resultScorePMB.associate = (models) => {
    // resultScorePMB.hasMany(models.master_question_pmb, {
    //   foreignKey: 'question_pmb_id',
    // });
    // resultScorePMB.hasMany(models.users, {
    //   foreignKey: 'user_id',
    // });
  };
  return resultScorePMB;
};
