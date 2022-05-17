const { Pool } = require('pg')

//will allow us to connect to the database
const pool = new Pool({
    user: 'leo',
    password: '1',
    database: 'nexusedu'
})

module.exports = pool