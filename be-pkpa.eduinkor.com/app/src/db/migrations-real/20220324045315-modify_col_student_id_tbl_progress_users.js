const db = require('../../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.query('ALTER TABLE progress_users ALTER COLUMN student_id TYPE integer USING (student_id::integer);');
  },
  down: async (queryInterface, Sequelize) => {
  },
};
