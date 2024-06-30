/* eslint-disable no-unused-vars */
const db = require('../../models');

const User = db.users;
const Role = db.roles;

const userRole = async (_email, _role) => {
  try {
    const user = await User.findOne({ where: { email: _email } });
    const role = await Role.findOne({ where: { name: _role } });
    return {
      user_id: user.id,
      role_id: role.id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    userRole('superadmin@inkorgroup.com', 'superadmin').then((data) => queryInterface.bulkInsert('user_role', [data], {}));
    userRole('admin@inkorgroup.com', 'admin').then((data) => queryInterface.bulkInsert('user_role', [data], {}));
    userRole('user@inkorgroup.com', 'user').then((data) => queryInterface.bulkInsert('user_role', [data], {}));
    userRole('tutor@inkorgroup.com', 'tutor').then((data) => queryInterface.bulkInsert('user_role', [data], {}));
    userRole('dewanpanelis@inkorgroup.com', 'dewan_panelis').then((data) => queryInterface.bulkInsert('user_role', [data], {}));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_role', null, {});
  },
};
