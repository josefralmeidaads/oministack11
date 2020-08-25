exports.up = function(knex) { // metodo que irá fazer criações e alterações na tabela 
    return knex.schema.createTable('ongs', function(table){
         table.string('id').primary();
         table.string('name').notNullable();
         table.string('email').notNullable();
         table.string('whattsapp').notNullable();
         table.string('city').notNullable();
         table.string('uf', 2).notNullable();// passando 2 como parâmetro assim só aceita 2 caracteres
         table.timestamps();
     });
 };
 
 exports.down = function(knex) { // caso eu precise voltar algo na tabela utilizo o down nesse caso vai excluir minha tabela
   return  knex.schema.dropTable('ongs');
 };