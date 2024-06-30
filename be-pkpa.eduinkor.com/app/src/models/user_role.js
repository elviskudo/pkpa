module.exports = (sequelize, DataTypes) => {
  const userRole = sequelize.define('user_role', {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
  }, {});
  return userRole;
};
