

const mySql  = require("mysql2");

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'sharpner',
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Success!!");
    }
})

module.exports = connection;

