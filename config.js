const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    port:process.env.port

});




module.exports = { pool };
