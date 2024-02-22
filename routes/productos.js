var express = require('express');
var router = express.Router();


/*Get home page (productos.ejs). */
router.get('/productos', function(req, res, next){
    res.render('productos',{ title:'Nuestros productos ...'});
  });
  


module.exports = router;
