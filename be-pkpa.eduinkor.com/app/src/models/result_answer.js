/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('result_answers', {
    student_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    content_question_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    answer: {
      type: DataTypes.INTEGER,
    },
    remidial_no: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.student, {
      foreignKey: 'student_id',
    });
  };
  return defModel;
};
