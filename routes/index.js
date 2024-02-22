var express = require('express')
var router = express.Router();

/* GET home page. //
router.get('/', function (req, res, next) {
  



  res.render('index', { title: 'Titulin' });
});

// GET home page.(nosotros.ejs) //
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosostros somos ....' });
});
*/

/*Get home page (index.ejs). */
router.get('/', function(req, res, next){

//aqui 

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
//borrar pa arriba

  res.render('index',{ title:'Express'});
});

/*Get home page (nosotros.ejs). */
router.get('/nosotros', function(req, res, next){
  res.render('nosotros',{ title:'Express'});
});

/*Get home page (productos.ejs). */
router.get('/productos', function(req, res, next){
  res.render('productos',{ title:'Nuestros productos ...'});
});

module.exports = router;
