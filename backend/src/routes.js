const express = require('express'); // importando express pro projeto
const crypto = require('crypto') // importatndo bibloteca de crptografia 
const connection = require('./database/connection'); // importando config bd

const routes = express.Router(); //Desacoplando modulo de Rotas() na variavel router

routes.get('/users', async (request, response) =>{
  const users = await connection('users').select('*');
  return response.json(users);
});

routes.post('/users', async (request,response) => {
  const { name, email, password, setor } = request.body;
  const id = crypto.randomBytes(4).toString('HEX');

  await connection('users').insert({
    id,
    name,
    email,
    password,
    setor,
  })

  return response.json({ id });

});

module.exports = routes;