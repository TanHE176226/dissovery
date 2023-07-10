'user strict';

const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "1234",
    database: process.env.DB_NAME || "swp391_se1722",
    port: "3306",
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;