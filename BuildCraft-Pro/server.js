// const path = require('path');
// require('dotenv').config()

const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'A6%1t73HvI',  //DON'T FORGET TO REMOVE YOUR PW BEFORE PUSHING TO GH! HACKERS ARE WATCHING!
    database: 'gcdc_db'
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});

require('./routes/html-routes')(app, connection);

app.listen(PORT, () => {
    console.log(`LCARS Server v4.7 Online - pt.L.ap ${PORT}`);
});


