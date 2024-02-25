var express = require('express');
var router = express.Router();
var connectionp = require("../conexion/conexion"); 


/*Get home page (productos.ejs). */
router.get('/', function (req, res, next) {

  connectionp.query("SELECT * FROM tblproductos",function(err, resultados) {
    console.log(resultados);

    //vamos a pasarle a prodcutos (template) la info de la base d eedatos
    
    res.render('productos',{ title:'Nuestros productos ...', Libros:resultados});


    
  });

  
    //por lo que asaramos esta linmea de codigo par aponerla a renderizar
    //res.render('productos',{ title:'Nuestros productos ...'});
  });
  


module.exports = router;
