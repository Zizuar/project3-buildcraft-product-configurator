const mysql = require('mysql');

module.exports = function(app, connection) {
    app.get('/', function(req, res) {
        connection.query("SELECT * FROM product_line", function(err, data){
            (err)?res.send(err):res.json({product_line: data});
        res.send('LCARS Server v4.7 Online.. awaiting input');
        });
    });
};