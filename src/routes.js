const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const DecretoController = require('./controllers/DecretoController');
const InfoController = require('./controllers/InfoController');

const routes = express.Router();

routes.get('/', function(req, res){
    res.send("Servidor Rodando")
});

routes.post('/user/cadastrar', UsuarioController.store);
routes.get('/user/login', UsuarioController.login);
//routes.get('/user/editar', UsuarioController.login);
routes.post('/decreto/cadastrar', DecretoController.store);
routes.post('/decretos', DecretoController.index);
//routes.get('/decreto/editar', UsuarioController.store);
//routes.get('/decreto/deletar', UsuarioController.store);
routes.post('/info/cadastrar', InfoController.store);
routes.post('/infos', InfoController.store);
//routes.get('/info/editar', UsuarioController.store);


module.exports = routes;