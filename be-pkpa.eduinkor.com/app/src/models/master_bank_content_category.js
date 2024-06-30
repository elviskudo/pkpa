module.exports = (sequelize, DataTypes) => {
  const defModel = sequelize.define('master_bank_content_category', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
    order: {
      type: DataTypes.INTEGER,
    },
  }, {});
  defModel.associate = (models) => {
    // defModel.hasMany(models.master_bank_content_topic, { foreignKey: 'content_category_id', as: 'category' });
  };
  return defModel;
};
