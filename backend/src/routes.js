const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router() // informando que meu routes irá utilizar o Router do express


//--------------Rota da Session----------------------------------//
routes.post('/session', SessionController.create)

//--------------Rotas da Tabela ONGS----------------------------//

routes.get('/ongs',OngController.index);// rota de pesquisa

routes.get('/ongs/search/',OngController.search);

routes.post('/ongs', OngController.create);//rota de cadastro   

//--------------Rotas da Tabela Incidents----------------------//
routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index); // trazendo todos os casos da ONG logada

module.exports = routes; // exportando o routes para outros módulos