exports.seed = (knex) => {
  return knex('products')
    .del()
    .then(() => {
      return knex('products').insert([
        {
          id: 1,
          product_name: 'Apple',
          vendor_code: 'VENDOR1',
          price: 10,
          description: 'An apple a day keeps the doctor away',
        },
        {
          id: 2,
          productName: 'Orange',
          vendorCode: 'VENDOR1',
          price: 20,
          description: 'An orange a day keeps the doctor away',
        },
        {
          id: 3,
          productName: 'Apricot',
          vendorCode: 'VENDOR1',
          price: 30,
          description: 'An apricot a day keeps the doctor away',
        },
        {
          id: 4,
          productName: 'Chair',
          vendorCode: 'VENDOR2',
          price: 100,
          description: 'A very comfortable chair',
        },
        {
          id: 5,
          productName: 'Table',
          vendorCode: 'VENDOR2',
          price: 200,
          description: 'A very comfortable table',
        },
        {
          id: 6,
          productName: 'Sofa',
          vendorCode: 'VENDOR2',
          price: 300,
          description: 'A very comfortable sofa',
        },
      ])
    })
}
