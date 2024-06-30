module.exports = (sequelize, DataTypes) => {
  const university = sequelize.define('universities', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING(25),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    vision: {
      type: DataTypes.TEXT,
    },
    mission: {
      type: DataTypes.TEXT,
    },
    goal: {
      type: DataTypes.TEXT,
    },
    logo_url: {
      type: DataTypes.STRING,
    },
    motto: {
      type: DataTypes.STRING,
    },
    certificate: {
      type: DataTypes.STRING,
    },
  }, {});
  // eslint-disable-next-line no-unused-vars
  university.associate = (models) => {
    university.belongsToMany(models.users, {
      through: 'admin_universities',
      as: 'admin_univ',
      foreignKey: 'university_id',
      otherKey: 'user_id',
    });
    university.hasMany(models.phase_universities, {
      as: 'university',
      foreignKey: 'university_id',
    });
    university.hasMany(models.admin_universities, {
      as: 'univ',
      foreignKey: 'university_id',
    });
    university.hasMany(models.master_bank_course, {
      as: 'universities',
      foreignKey: 'university_id',
    });
  };
  return university;
};
