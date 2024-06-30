/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('result_answers_tasks', {
    student_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    content_topic_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    content_type_id: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    originalname: {
      type: DataTypes.STRING,
    },
    owner_id: {
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
