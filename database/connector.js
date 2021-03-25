const mysql = require('mysql2');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'canrones_evoq',
    password: 'EvoqP@ssw0rd',
    database: 'canrones_evoq',
    multipleStatements: true
});

// var connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'evoq',
//     multipleStatements: true
// });

connection.getConnection((err) => {
    if (err) {
        console.log(JSON.stringify(err));
    } else {
        console.log('Connection success!');
    }
})

module.exports = connection.promise();