var express = require('express');
var router = express.Router();
console.log('routes1');
var  equiposController=require('../controllers/equipos_controller');
var  alarmasController=require('../controllers/alarmas_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Definicion de rutas de */
console.log('routes1');
router.get('/equipos',equiposController.show);
router.get('/alarmas',alarmasController.show);
console.log('routes');
module.exports = router;
