const connection = require('../database/connections');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await await connection('ongs').where('id', id).select('name').first()
        if(!ong){ // se essa ong não existir
            return response.status(400).json({ error: 'No ONG found with this ID'})
        }
        
        return response.status(200).json(ong);
        
    }
}