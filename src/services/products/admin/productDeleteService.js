const BaseProduct = require('../baseProduct')

class ProductDeleteService extends BaseProduct {
  call(productIds) {
    return this.productRepo.deleteProducts(productIds)
  }
}

module.exports = ProductDeleteService
