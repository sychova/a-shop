exports.seed = (knex) => {
  return knex('orders')
    .del()
    .then(() => {
      return knex('orders').insert([
        {
          id: 1,
          customerName: 'Kathryn Janeway',
          customerEmail: 'kathryn.janeway@example.com',
          totalPrice: 30,
          deliveryMethod: 'self',
        },
        {
          id: 2,
          customerName: 'Kathryn Janeway',
          customerEmail: 'k.janeway@example.com',
          totalPrice: 600,
          deliveryMethod: 'address',
          deliveryAddress: 'This is an address to deliver the goods to',
        },
      ])
    })
}
