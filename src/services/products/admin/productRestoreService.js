const BaseProduct = require('../baseProduct')

class ProductRestoreService extends BaseProduct {
  call(productIds) {
    return this.productRepo.restoreProducts(productIds)
  }
}

module.exports = ProductRestoreService
