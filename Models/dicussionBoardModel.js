const pool = require('../Database-Config/db');

class DiscussionBoard {
    static async displayAllPost() {
        const databaseResult = await pool.query('SELECT * FROM posts ORDER BY post_id DESC');
        return databaseResult.rows;
    }

    static async addPost(message, hashtag) {
        const databaseResult = await pool.query('INSERT into posts (message, hashtag) values ($1, $2) returning *', [message, hashtag]);
        return databaseResult.rows[0];
    }

    static async updatePost(id, message, hashtag) {
        const databaseResult = await pool.query('UPDATE posts SET message = $2, hashtag = $3 WHERE post_id = $1', [id, message, hashtag]);

        const searchResult = await pool.query('SELECT * FROM posts WHERE post_id = $1', [id]);

        return searchResult.rows[0];
    }

    static async deletePost(id) {
        const databaseResult = await pool.query('DELETE FROM posts WHERE post_id = $1', [id]);
        return databaseResult.rows[0]
    }
}

module.exports = DiscussionBoard