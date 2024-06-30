module.exports = (sequelize, DataTypes) => {
  const userDetail = sequelize.define('user_details', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    born_place: {
      type: DataTypes.STRING,
    },
    born_date: {
      type: DataTypes.DATE,
    },
    address: {
      type: DataTypes.STRING,
    },
    rt: {
      type: DataTypes.INTEGER,
    },
    rw: {
      type: DataTypes.INTEGER,
    },
    village: {
      type: DataTypes.STRING,
    },
    district_id: {
      type: DataTypes.INTEGER,
    },
    city_id: {
      type: DataTypes.INTEGER,
    },
    state_id: {
      type: DataTypes.INTEGER,
    },
    country_id: {
      type: DataTypes.INTEGER,
    },
    zip_code: {
      type: DataTypes.STRING,
    },
    university: {
      type: DataTypes.STRING,
    },
    accreditation: {
      type: DataTypes.STRING,
    },
    ipk: {
      type: DataTypes.DECIMAL,
    },
    is_work: {
      type: DataTypes.BOOLEAN,
    },
    accreditation_faculty: {
      type: DataTypes.STRING,
    },
  }, {});
  userDetail.associate = (models) => {
    userDetail.belongsTo(models.users);
  };
  return userDetail;
};
