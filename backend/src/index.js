const express = require('express'); // importando express pro projeto
const routes = require('./routes'); // importando rotas do arquivo route.js

const app = express(); // instanciando express em app

app.use(express.json()); // Transformar requisições em json
app.use(routes); // usando rotas importadas
app.listen(3333); // ouvir porta 3333



