const db = require('../../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.query(`create or replace procedure sp_delete_duplicate_show_course()
    language plpgsql    
    as $$
    begin
    DELETE FROM show_courses
    WHERE id IN
        (SELECT id
        FROM 
            (SELECT id,
             ROW_NUMBER() OVER( PARTITION BY package_content_course_id, owner_id
            ORDER BY  id ) AS row_num
            FROM show_courses ) t
            WHERE t.row_num > 1 );
    
        commit;
    end;$$`);
  },
  down: async (queryInterface, Sequelize) => {
    await db.sequelize.query('DROP PROCEDURE sp_delete_duplicate_show_course();');
  },
};
