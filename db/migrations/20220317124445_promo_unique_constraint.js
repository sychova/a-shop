exports.up = async (knex) => {
  await knex.schema.alterTable('promos', (t) => {
    t.string('code').unique().notNullable().alter()
  })
}

exports.down = async (knex) => {
  await knex.schema.alterTable('promos', (t) => {
    t.dropUnique('code')
  })
}
