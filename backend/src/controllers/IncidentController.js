const connection = require('../database/connections');// conexão com o banco de dados

module.exports={
    
    async index(request, response){
       //Controlando a quantidade de registo por paginação limite 5 registros por página
       const{ page = 1 } = request.query
       
       const [count] = await connection('incidents').count() // contando os registros e pegando a primeira posição do aray que contem as quantidades de registros

       //Estamos limitando 5 registros por página, e multiplicando 5 registros por página começando da página 0 (page - 1)
       const dados = await connection('incidents')
       .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // me traga informações das Ongs onde o ID da ONG seja igual ao meu ONG_ID da tabela incidents
       .limit(5).offset((page - 1)* 5)
       .select([ // Quero trazer todas do incidents porém me traga apenas o nome, email, whatts, city e uf das ONGS
           'incidents.*', 
           'ongs.name',
           'ongs.email', 
           'ongs.whattsapp', 
           'ongs.city', 
           'ongs.uf']);
       
       console.log(count);

       response.header('X-Total-Count', count['count(*)']); // retonando o número de registros pelo meu headers

       return response.json(dados);
    },

    async delete(request, response){
        const { id } = request.params // obtendo id no parâmetro
        const ong_id = request.headers.authorization// obtendo o ong_id da ONG logada pelo headers

        const incident = await connection('incidents').where('id', id).select('ong_id').first()

        if(incident.ong_id = ong_id){
            await connection('incidents').where('id', id).del()
            return response.status(204).json({message:"Incident Foi Deletado Com Sucesso"});
        } else {
            return response.status(401).json({message:"Operação Não pode ser Realizada!!!"})
        }

    },

    async create(request, response){
        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization // obtendo ong_id atarvés do headers

        //request.headers; mostrará os dados da foreignkey e através da autenticação vai atribuir o ong_id
        //na tabela incidents, esse ong_id por se tratar de autenticação vem no reques.headers 

       const [id] = await connection('incidents').insert({ //obtendo o ID da Incidents
           title,
           description,
           value,
           ong_id
       })
        return response.json({ id });
    }
}