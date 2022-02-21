exports.seed = (knex) => {
  return knex('orders')
    .del()
    .then(() => {
      return knex('orders').insert([
        {
          code: 'PROMOCOD',
          value: 10,
        },
        {
          code: 'TOPSALE',
          value: 30,
        },
      ])
    })
}
