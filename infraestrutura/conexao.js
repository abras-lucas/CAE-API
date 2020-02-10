const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Varian1536',
    database: 'agenda-cae'
})

module.exports = conexao