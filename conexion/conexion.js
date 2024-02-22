const mysql = require('mysql2');
const connection = mysql.createConnection({
    /*
    host: 'localhost',
    user: 'root',
    password: 'Batiz2024',
    database: 'ventas'
    */

    host: 'localhost',
    user: 'root',
    password: 'N0ml0',
    database: 'mydb'
});

connection.connect(

    (err) => {
        if (!err) { console.log("conec"); }
    
    else{
    console.log( "faillaste manco");
    }
}
);

connection.query("SELECT * FROM tblproductos", function (err, resultados) {
    console.log(err);
    console.log(resultados);
});

connection.end()


/*
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
*/

/*

const mysql = require('mysql');
const connection = mysql.createConnection({
  //host: '127.0.0.1',
    host: ' localhost:3307',
    user: 'root',
    password: 'Batiz2024',
    database: 'ventas'
});
 
connection.connect(

    (err) => {
        if (!err) { console.log("conectec    "); }
        else{ console.log( "conexion fail");    }
}
);

connection.query("SELECT * FROM tblproductos", function (err, resultados) {
    console.log(resultados);
} );

connection.end() */