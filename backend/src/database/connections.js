const knex = require('knex'); // importando knez
const configuration = require('../../knexfile');

const connection = knex(configuration.development); // passando a configuração do banco para o KNEX

module.exports = connection;

