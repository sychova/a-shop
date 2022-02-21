exports.seed = (knex) => {
  return knex('orders')
    .del()
    .then(() => {
      return knex('orders').insert([
        {
          id: 1,
          customerName: 'Anastasiya Sychova',
          customerEmail: 'anastasiya.sychova@example.com',
          totalPrice: 30,
          deliveryMethod: 'self',
        },
        {
          id: 2,
          customerName: 'Anastasiya Sychova',
          customerEmail: 'a.sychova@example.com',
          totalPrice: 600,
          deliveryMethod: 'address',
          deliveryAddress: 'This is an address to deliver the goods to',
        },
      ])
    })
}
