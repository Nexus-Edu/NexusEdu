const { Pool } = require('pg')

//will allow us to connect to the database
const pool = new Pool({
    user: 'example',
    password: 'code',
    database: 'nShape'
})

module.exports = pool