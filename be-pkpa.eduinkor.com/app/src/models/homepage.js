/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('homepages', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    section_name: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    sub_content: {
      type: DataTypes.TEXT,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
  };
  return defModel;
};
