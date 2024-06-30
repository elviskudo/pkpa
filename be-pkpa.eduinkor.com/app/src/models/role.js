module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('roles', {
    name: DataTypes.STRING,
  }, {});
  role.associate = (models) => {
    role.belongsToMany(models.users, {
      through: 'user_role',
      as: 'users',
      foreignKey: 'role_id',
      otherKey: 'user_id',
    });
  };
  return role;
};
