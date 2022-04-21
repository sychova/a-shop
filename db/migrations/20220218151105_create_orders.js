exports.up = async (knex) => {
  await knex.schema.createTable('orders', (t) => {
    t.increments()
    t.string('customer_name').notNullable()
    t.string('customer_email').notNullable()
    t.integer('promo_id').references('id').inTable('promos').unsigned()
    t.integer('total_price').notNullable()
    t.boolean('self_pickup').notNullable()
    t.text('delivery_address')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('orders')
}
