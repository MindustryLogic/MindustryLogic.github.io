const mysql = require("mysql")
const linkup = mysql.createConnection({
    host: "localhost",
    user: "MindustryLogic",
    password: "Archieiscool",
    database: "a_heckin_db"
});
linkup.connect();

linkup.query('SELECT 1 + 1 AS solution', function (err, result){
    if (err) throw error;
    console.log("The thing is that it is ", results[0].solution );
});

linkup.end();