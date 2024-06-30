module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank', {
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    bank_code: {
      type: DataTypes.STRING,
    },
    va_code: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    via_atm: {
      type: DataTypes.TEXT,
    },
    via_internet_banking: {
      type: DataTypes.TEXT,
    },
    via_mobile_banking: {
      type: DataTypes.TEXT,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.hasMany(models.trx_payment, { as: 'bank', foreignKey: 'bank_id' });
    // defModel.belongsTo(models.phase_universities);
  };
  return defModel;
};
