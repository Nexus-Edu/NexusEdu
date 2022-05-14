const pool = require('../Database-Config/db')

class DiscussionBoard {
    static async displayAllPost()  {
        const databaseResult = await pool.query('SELECT * FROM posts ORDER BY post_id DESC');
        return databaseResult.rows;
    }
}

module.exports = DiscussionBoard