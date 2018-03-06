exports.up = function(knex, Promise) {
  // is for making changes to the database
  return knex.schema.createTable('zoos', function(tbl) {
    tbl.increments('id'); // creates a primary key called id

    tbl
      .string('name', 255)
      .notNullable() // required, must have a value
      .unique('name'); // the value should be unique

    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  // for undoing the changes
  return knex.schema.dropTableIfExists('zoos');
};
