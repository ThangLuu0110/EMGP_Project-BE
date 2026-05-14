const mysql = require('mysql2/promise');
require('dotenv').config();

let connection = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT_DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = connection;