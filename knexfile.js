const { parse } = require('pg-connection-string')
const {
  wrapIdentifier,
  postProcessResponse,
} = require('knex-case-converter-plugin')

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
  wrapIdentifier,
  postProcessResponse,
}
