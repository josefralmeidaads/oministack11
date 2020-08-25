
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); // gerar uma chave auto incremento chamada ID
  
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //valor em dinheiro com vírgula
  
        //ForeingKey para armazenar o id da ONG que gerou o incidente
        table.string('ong_id').notNullable();
  
        //Criando a ForeingKey
        //ForeingKey ong_id e referencia do campo id da tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return schema.knex.dropTable('incidents');
};
