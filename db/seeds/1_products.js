exports.seed = (knex) => {
  return knex('products')
    .del()
    .then(() => {
      return knex('products').insert([
        {
          name: 'Apple',
          vendorCode: 'VENDOR1',
          price: 10,
          description: 'An apple a day keeps the doctor away',
          imagePath: '../../img/products/apple.jpg',
        },
        {
          name: 'Orange',
          vendorCode: 'VENDOR1',
          price: 20,
          description: 'An orange a day keeps the doctor away',
          imagePath: '../../img/products/orange.jpg',
        },
        {
          name: 'Apricot',
          vendorCode: 'VENDOR1',
          price: 30,
          description: 'An apricot a day keeps the doctor away',
          imagePath: '../../img/products/apricot.jpg',
          product_status: 'deleted',
        },
        {
          name: 'Chair',
          vendorCode: 'VENDOR2',
          price: 100,
          description: 'A very comfortable chair',
        },
        {
          name: 'Table',
          vendorCode: 'VENDOR2',
          price: 200,
          description: 'A very comfortable table',
          imagePath: '../../img/products/table.jpg',
        },
        {
          name: 'Sofa',
          vendorCode: 'VENDOR2',
          price: 300,
          description: 'A very comfortable sofa',
          imagePath: '../../img/products/sofa.jpg',
        },
      ])
    })
}
