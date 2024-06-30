module.exports = (sequelize, DataTypes) => {
  const countries = sequelize.define('countries', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    iso: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nicename: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    iso3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    numcode: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    phonecode: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  return countries;
};
