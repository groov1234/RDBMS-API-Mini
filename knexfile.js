// Update config settings

module.exports = {
  development: {
    // rename from production
    client: 'mysql', // changed
    connection: {
      host: 'localhost', // added
      database: 'zoos_db', // changed
      user: 'root', // changed
      password: 'lambda' // changed
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations', // added
      tableName: 'knex_migrations'
    },
    seeds: {
      // added
      directory: './database/seeds'
    }
  }
};

// npm i -g knex
