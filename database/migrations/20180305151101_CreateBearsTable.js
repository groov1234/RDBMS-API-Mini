exports.up = function(knex, Promise) {
  return knex.schema.createTable('bears', function(tbl) {
    tbl.increments('id').primary();

    tbl
      .integer('zooId')
      .unsigned()
      .references('id')
      .inTable('zoos');

    tbl
      .string('species', 80)
      .notNullable()
      .unique('species');

    tbl
      .string('latinName', 80)
      .notNullable()
      .unique('latinName');

    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bears');
};
