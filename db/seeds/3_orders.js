exports.seed = (knex) => {
  return knex('orders')
    .del()
    .then(() => {
      return knex('orders').insert([
        {
          customerName: 'Kathryn Janeway',
          customerEmail: 'kathryn.janeway@example.com',
          totalPrice: 30,
          deliveryMethod: 'self',
        },
        {
          customerName: 'Kathryn Janeway',
          customerEmail: 'k.janeway@example.com',
          totalPrice: 600,
          deliveryMethod: 'address',
          deliveryAddress: 'This is an address to deliver the goods to',
        },
      ])
    })
}
