exports.up = async (knex) => {
  await knex.schema.createTable('orders_products', (t) => {
    t.increments()
    t.integer('order_id')
      .notNullable()
      .references('id')
      .inTable('orders')
      .unsigned()
    t.integer('product_id')
      .notNullable()
      .references('id')
      .inTable('products')
      .unsigned()
    t.integer('price').notNullable().unsigned()
    t.integer('amount').notNullable()
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('orders_products')
}
