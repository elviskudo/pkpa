module.exports = (sequelize, DataTypes) => {
  const phaseUniversity = sequelize.define('phase_universities', {
    university_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    phase_no: {
      type: DataTypes.INTEGER,
    },
    register_period_start: {
      type: DataTypes.DATE,
    },
    register_period_end: {
      type: DataTypes.DATE,
    },
    learning_period_start: {
      type: DataTypes.DATE,
    },
    learning_period_end: {
      type: DataTypes.DATE,
    },
    system: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING(25),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    status: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    sistem_belajar: {
      type: DataTypes.STRING,
    },
  }, {});
  // eslint-disable-next-line no-unused-vars
  phaseUniversity.associate = (models) => {
    phaseUniversity.belongsTo(models.universities, {
      as: 'university',
      foreignKey: 'university_id',
    });
    phaseUniversity.belongsToMany(models.users, {
      through: 'user_universities',
      as: 'users',
      foreignKey: 'phase_university_id',
      otherKey: 'user_id',
    });
    phaseUniversity.hasOne(models.student, { as: 'pu', foreignKey: 'phase_university_id' });
    phaseUniversity.hasMany(models.live_streaming, { as: 'phase', foreignKey: 'phase_id' });
  };
  return phaseUniversity;
};
