const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class crate_table_admin_universities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crate_table_admin_universities.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'crate_table_admin_universities',
  });
  return crate_table_admin_universities;
};
