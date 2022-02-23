exports.seed = (knex) => {
  return knex('promos')
    .del()
    .then(() => {
      return knex('promos').insert([
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
