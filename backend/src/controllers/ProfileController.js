const connections = require('../database/connections')

module.exports = {

    async index(request, response) {
        const ong_id =  request.headers.authorization

        const incident = await await connections('incidents').select('*').where('ong_id', ong_id)

        return response.json(incident)
    }

}