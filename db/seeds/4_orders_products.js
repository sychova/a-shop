exports.seed = (knex) => {
  return knex('orders_products')
    .del()
    .then(() => {
      return knex('orders_products').insert([
        {
          orderId: 1,
          productId: 1,
          price: 10,
          amount: 1,
        },
        {
          orderId: 1,
          productId: 2,
          price: 20,
          amount: 1,
        },
        {
          orderId: 2,
          productId: 4,
          price: 100,
          amount: 3,
        },
        {
          orderId: 2,
          productId: 6,
          price: 300,
          amount: 1,
        },
        {
          orderId: 3,
          productId: 1,
          price: 10,
          amount: 1,
        },
        {
          orderId: 4,
          productId: 1,
          price: 10,
          amount: 1,
        },
        {
          orderId: 5,
          productId: 1,
          price: 10,
          amount: 1,
        },
        {
          orderId: 6,
          productId: 1,
          price: 10,
          amount: 1,
        },
        {
          orderId: 7,
          productId: 1,
          price: 10,
          amount: 1,
        },
      ])
    })
}
