const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0339637721Hh@',
    database: 'KIOTBK'
})

connection.connect(err => {
    if (err) console.error('EEError connecting to database: ', err)
    console.log('Connected!')
})

module.exports = connection