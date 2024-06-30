/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('testimonials', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  defModel.associate = (models) => {
  };
  return defModel;
};
