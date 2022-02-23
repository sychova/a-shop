exports.seed = (knex) => {
  return knex('products')
    .del()
    .then(() => {
      return knex('products').insert([
        {
          id: 1,
          name: 'Apple',
          vendorCode: 'VENDOR1',
          price: 10,
          description: 'An apple a day keeps the doctor away',
          imagePath: '../../img/products/apple.jpg',
        },
        {
          id: 2,
          name: 'Orange',
          vendorCode: 'VENDOR1',
          price: 20,
          description: 'An orange a day keeps the doctor away',
          imagePath: '../../img/products/orange.jpg',
        },
        {
          id: 3,
          name: 'Apricot',
          vendorCode: 'VENDOR1',
          price: 30,
          description: 'An apricot a day keeps the doctor away',
          imagePath: '../../img/products/apricot.jpg',
          product_status: 'deleted',
        },
        {
          id: 4,
          name: 'Chair',
          vendorCode: 'VENDOR2',
          price: 100,
          description: 'A very comfortable chair',
          imagePath: '../../img/products/chair.jpg',
        },
        {
          id: 5,
          name: 'Table',
          vendorCode: 'VENDOR2',
          price: 200,
          description: 'A very comfortable table',
          imagePath: '../../img/products/table.jpg',
        },
        {
          id: 6,
          name: 'Sofa',
          vendorCode: 'VENDOR2',
          price: 300,
          description: 'A very comfortable sofa',
          imagePath: '../../img/products/sofa.jpg',
        },
      ])
    })
}
