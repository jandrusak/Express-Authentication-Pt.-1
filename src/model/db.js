let mysql = require("mysql");

let connection = mysql.createPool({
    user: process.env.Db_Username, 
    password: process.env.Db_Password, 
    host: process.env.Db_Host, 
    port: process.env.DB_PORT, 
    database: process.env.Db_Name
})


module.exports = connection;