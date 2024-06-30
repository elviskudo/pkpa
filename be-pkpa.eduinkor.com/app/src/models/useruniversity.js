module.exports = (sequelize, DataTypes) => {
  const userUniversity = sequelize.define('user_universities', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    phase_university_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
    },
  }, {});
  // eslint-disable-next-line no-unused-vars
  userUniversity.associate = (models) => {
    userUniversity.belongsTo(models.phase_universities, {
      foreignKey: 'phase_university_id',
    });
    userUniversity.belongsTo(models.users, {
      as: 'user_univ',
      foreignKey: 'user_id',
    });
    // university.belongsToMany(models.roles, {
    //   through: 'user_role',
    //   as: 'roles',
    //   foreignKey: 'user_id',
    //   otherKey: 'role_id',
    // });
    // user.hasOne(models.user_details, {
    //   foreignKey: 'user_id',
    // });
  };
  return userUniversity;
};
