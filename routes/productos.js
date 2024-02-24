var express = require('express');
var router = express.Router();
var connectionp = require("../conexion/conexion"); 


/*Get home page (productos.ejs). */
router.get('/', function (req, res, next) {

  connectionp.query("SELECT * FROM tblproductos",function(err, resultados) {
    console.log(resultados);
    
  });

  
    
    res.render('productos',{ title:'Nuestros productos ...'});
  });
  


module.exports = router;
