module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('trx_payment', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    bank_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          args: true,
          msg: 'The bank_id cannot be empty',
        },
        not: {
          args: ['[a-z]', 'i'],
          msg: 'The The bank_id must be number',
        },
      },
    },
    trx_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    payment_id: {
      type: DataTypes.STRING,
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    external_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    account_number: {
      type: DataTypes.STRING,
    },
    expiration_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    phase_university_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          args: true,
          msg: 'The phase_university_id cannot be empty',
        },
        not: {
          args: ['[a-z]', 'i'],
          msg: 'The phase_university_id must be number',
        },
      },
    },
    invoice: {
      type: DataTypes.STRING,
    },
  }, {});
  defModel.associate = (models) => {
    defModel.belongsTo(models.master_bank, { as: 'bank', foreignKey: 'bank_id' });
    // defModel.belongsTo(models.phase_universities);
  };
  return defModel;
};
