module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    fullname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter fullname',
        },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email address already in use!',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email not valid!',
        },
      },
      field: 'email',
    },
    phone_no: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Phone No. already in use!',
      },
      validate: {
        not: ['[a-z]', 'i'],
      },
    },
    wa_no: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        not: ['[a-z]', 'i'],
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    email_verified_at: {
      type: DataTypes.DATE,
    },
    token: {
      type: DataTypes.TEXT,
    },
    token_firebase: {
      type: DataTypes.TEXT,
    },
    remidial_to: {
      type: DataTypes.INTEGER,
    },
    pass_exam_pmb: {
      type: DataTypes.BOOLEAN,
    },
    last_login: {
      type: DataTypes.DATE,
    },
  }, {});
  user.associate = (models) => {
    user.belongsToMany(models.roles, {
      through: 'user_role',
      as: 'roles',
      foreignKey: 'user_id',
      otherKey: 'role_id',
    });
    user.belongsToMany(models.universities, {
      through: 'admin_universities',
      as: 'admin_univ',
      foreignKey: 'user_id',
      otherKey: 'university_id',
    });
    user.hasOne(models.user_details, {
      foreignKey: 'user_id',
    });
    user.belongsToMany(models.phase_universities, {
      through: 'user_universities',
      as: 'phaseUniversities',
      foreignKey: 'user_id',
      otherKey: 'phase_university_id',
    });
    user.hasMany(models.files, {
      foreignKey: 'user_id',
    });
    user.hasMany(models.result_score_pmb, {
      foreignKey: 'user_id',
    });
    user.hasMany(models.user_universities, {
      as: 'user_univ',
      foreignKey: 'user_id',
    });
    user.hasMany(models.student, { as: 'student', foreignKey: 'user_id' });
    // user.hasMany(models.admin_universities, {
    //   as: 'admin_univ',
    //   foreignKey: 'user_id',
    // });
    // user.hasMany(models.user_live_streaming, { foreignKey: 'user_id' });
  };
  return user;
};
