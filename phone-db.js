var mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Orange2023@BROWN",
    database: 'camerphonedb',
    multipleStatements: true
});
  
  
con.connect(function(err) {
	if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
    }
    console.log('Camerphone Database is connected successfully !');
});

module.exports = con;