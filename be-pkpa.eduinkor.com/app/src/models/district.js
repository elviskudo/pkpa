module.exports = (sequelize, DataTypes) => {
  const district = sequelize.define('districts', {
    city_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  return district;
};
