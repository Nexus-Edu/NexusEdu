const pool = require('../Database-Config/db');

class User {

    static async getAllUserAccounts() {
        const databaseResult = await pool.query('SELECT * FROM users');
        return databaseResult.rows
    }

    static async displayUserInfo(id) {
        const databaseResult = await pool.query('SELECT * FROM users WHERE user_id = $1', [id])

        console.log(databaseResult)
    
        return databaseResult.rows
    }

    static async updateInfo(id, email, first_name, last_name, age, birthday, image, bio) {
        await pool.query('UPDATE users SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8 WHERE user_id = $1', [id, email, first_name, last_name, age, birthday, image, bio])

        const databaseResult = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
        return databaseResult.rows[0]
    }
}

module.exports = User;