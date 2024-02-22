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



  res.render('index',{ title:'Express'});
});

/*Get home page (nosotros.ejs). */
router.get('/nosotros', function(req, res, next){
  res.render('nosotros',{ title:'Express'});
});



module.exports = router;
