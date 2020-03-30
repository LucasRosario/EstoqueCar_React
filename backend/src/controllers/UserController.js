const crypto = require('crypto') // importatndo bibloteca de crptografia 
const connection = require('../database/connection'); // conexao com o banco

module.exports = {
   async index( request, response){ 
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response){
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
  }
};