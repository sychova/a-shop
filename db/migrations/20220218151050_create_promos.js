exports.up = async (knex) => {
  await knex.schema.createTable('promos', (t) => {
    t.increments()
    t.string('code').notNullable()
    t.integer('value').notNullable()
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('promos')
}
