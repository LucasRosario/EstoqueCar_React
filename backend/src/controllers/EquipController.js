const connection = require('../database/connection'); // conexao com o banco

module.exports = {

    async index(request, response){
        const equips = await connection('equips').select('*');
        return response.json(equips);
    },

    async create(request, response){
        const { tombo, tipo, marca, modelo, estado, setor } = request.body;
        const users_id = request.headers.authorization;

         const [id] = await connection('equips').insert({
            tombo,
            tipo,
            marca,
            modelo,
            estado,
            setor,
            users_id,
        }); 
        return response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params;
        const users_id = request.headers.authorization;

        const  equips = await connection('equips')
            .where('id', id)
            .select('users_id')
            .first();
        if (equips.users_id !== users_id){
            return response.status(401).json({ error: 'Operation not permitted'});
        }
        await connection('equips').where('id', id).delete();
        return response.status(204).send();
    }


};