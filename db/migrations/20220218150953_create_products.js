exports.up = async (knex) => {
  await knex.schema.createTable('products', (t) => {
    t.increments()
    t.string('name').notNullable()
    t.string('vendor_code').notNullable()
    t.integer('price').notNullable().unsigned()
    t.text('description')
    t.string('image_path')
    t.enu('product_status', ['active', 'deleted'], {
      useNative: true,
      enumName: 'product_status',
    })
      .notNullable()
      .defaultTo('active')
  })
}

exports.down = async (knex) => {
  await knex.raw('DROP TYPE status')
  await knex.schema.dropTable('products')
}
