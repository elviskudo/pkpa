module.exports = (sequelize, DataTypes) => {
  const cities = sequelize.define('cities', {
    state_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  return cities;
};
