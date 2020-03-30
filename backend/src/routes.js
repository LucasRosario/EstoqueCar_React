const express = require('express'); // importando express pro projeto
const UserController = require('./controllers/UserController');
const EquipController = require('./controllers/EquipController');

const routes = express.Router(); //Desacoplando modulo de Rotas() na variavel router

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/equips', EquipController.index);
routes.post('/equips', EquipController.create);
routes.delete('/equips/:id', EquipController.delete);

module.exports = routes;