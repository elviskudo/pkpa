/* eslint-disable no-unused-vars */
const arrRoles = [
  { name: 'superadmin', created_at: new Date(), updated_at: new Date() },
  { name: 'admin', created_at: new Date(), updated_at: new Date() },
  { name: 'user', created_at: new Date(), updated_at: new Date() },
  { name: 'tutor', created_at: new Date(), updated_at: new Date() },
  { name: 'dewan_panelis', created_at: new Date(), updated_at: new Date() },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', arrRoles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
