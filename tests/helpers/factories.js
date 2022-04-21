const { productRepo, orderRepo } = require('../../src/repos')

const productFactory = {
  async call(params) {
    return productRepo.create({
      name: 'Apple',
      vendorCode: 'VENDOR1',
      price: 10,
      // description: 'An apple a day keeps the doctor away',
      // imagePath: '/img/products/apple.jpg',
      ...params,
    })
  },
}

const orderFactory = {
  call() {
    return orderRepo.create({
      customerName: 'Anastasiya',
      customerEmail: 'anastasiya.sychova@gmail.com',
      totalPrice: 1000,
      selfPickup: false,
      deliveryAddress: 'This is a very important address',
    })
  },
}

const orderProductFactory = {
  call(params) {
    return orderRepo.addProducts(params)
  },
}

module.exports = {
  productFactory,
  orderFactory,
  orderProductFactory,
}
