exports.up = async (knex) => {
  await knex.schema.createTable('products', (t) => {
    t.increments()
    t.string('name').notNullable()
    t.string('vendor_code').notNullable()
    t.integer('price').notNullable().unsigned()
    t.text('description')
    t.string('image_path')
    t.timestamp('deletedAt', { useTz: false }).defaultTo(null)
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('products')
}
