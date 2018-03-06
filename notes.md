Database

* Tables (Collections) : Data goes here
  * Rows (Document) : a record in the table
    * Columns (Field) : a property of each record

Application -> Objects
Database -> Relations

References(MongoDB) -> Foreign Keys(MySQL)

Primary Key(id(userId))

Connect from Node.

* raw driver (connector).
* query builder
* ORM = Object Relational Mapper

Install:

* mysql
* express
* knex
* body-parser
* nodemon add a dev dependency `npm i -D nodemon`

knex init
knex migrate:make CreateZoosTable
knex migrate:latest
