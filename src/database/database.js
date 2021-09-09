const config = require('../../config/cfg.js');
const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database


})

/* mysqlConnection.connect( _=> {
    console.log(`Conectados a ${config.database.database}...`)
}) */




module.exports = mysqlConnection;