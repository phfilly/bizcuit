const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
})

connection.connect((err) => {
    if (!err)
        console.log('DB Connection Succeded')
    else
        console.log('DB Connection Failed \n Error :' + JSON.stringify(err, undefined, 2))
})

module.exports = connection