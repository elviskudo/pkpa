module.exports = (sequelize, DataTypes) => {
  const notification = sequelize.define('notifications', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    message: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  return notification;
};
