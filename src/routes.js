const express = require('express');
const path = require('path');

const UsuarioController = require('./controllers/UsuarioController');
const DecretoController = require('./controllers/DecretoController');
const InfoController = require('./controllers/InfoController');

const routes = express.Router();

routes.get('/',function(req,res){
    res.sendFile(path.join(__dirname + "/site/index.html"));
});

routes.post('/user/cadastrar', UsuarioController.store);
routes.post('/user/login', UsuarioController.login);
//routes.get('/user/editar', UsuarioController.login);
routes.post('/decreto/cadastrar', DecretoController.store);
routes.get('/decretos', DecretoController.index);
//routes.get('/decreto/editar', UsuarioController.store);
//routes.get('/decreto/deletar', UsuarioController.store);
routes.post('/info/cadastrar', InfoController.store);
routes.get('/infos', InfoController.index);
//routes.get('/info/editar', UsuarioController.store);


module.exports = routes;