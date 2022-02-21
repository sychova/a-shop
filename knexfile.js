const { parse } = require('pg-connection-string')
const plugin = require('knex-case-converter-plugin')

module.exports = {
  client: 'pg',
  connection: {
    ssl: { rejectUnauthorized: false },
    ...parse(process.env.PG_CONNECTION),
  },
  migrations: {
    directory: `${__dirname}/db/migrations`,
  },
  seeds: {
    directory: `${__dirname}/db/seeds`,
  },
  ...plugin,
}
