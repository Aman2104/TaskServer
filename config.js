const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.mysql_host,
    database: process.env.mysql_database,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    port:3306

});




module.exports = { pool };
