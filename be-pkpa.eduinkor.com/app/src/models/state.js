module.exports = (sequelize, DataTypes) => {
  const states = sequelize.define('states', {
    country_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  return states;
};
