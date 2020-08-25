const crypto = require('crypto'); // pacote do Node de criptografia
const connection = require('../database/connections');// conexão com o banco de dados

module.exports = {
    async index(request, response){// lista todos
        const dados = await connection('ongs').select('*'); // consultando todo os registros
        return response.json(dados);
    },

    async search(request, response){// Consulta por ONG
        const {id} = await request.params // dados do corpo
        const dados = await connection('ongs').select('*').where('name', name);

        return response.json(dados);
    },

    async create(request, response){ // rota de cadastro
        const { name, email, whattsapp, city, uf } = request.body
    
        const id = crypto.randomBytes(4).toString('HEX'); // gerando um valor randomico para o ID de 4 bytes e convertendo para string HEXADECIMAL
    
        //passaando o nome da tabela que vou inserir os dados
        await connection('ongs').insert({
            id,
            name,
            email,
            whattsapp,
            city,
            uf,
        })
    
        return response.json({ id })
    }
}

