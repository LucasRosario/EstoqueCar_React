
exports.up = function(knex) {
  return knex.schema.createTable("equips", function (table){
    table.increments();

    table.string("tombo").notNullable();
    table.string("tipo").notNullable();
    table.string("marca").notNullable();
    table.string("modelo").notNullable();
    table.string("estado").notNullable();
    table.string("setor").notNullable();

    table.string("users_id").notNullable();

    table.foreign("users_id").references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
