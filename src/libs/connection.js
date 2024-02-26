require('dotenv').config();

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

console.log(conn);

conn.connect((err) => {
    if (err) {
        console.error('Erro na conexão com o banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
});

module.exports = conn;
