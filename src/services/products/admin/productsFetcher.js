const BaseProduct = require('../baseProduct')

class AdminProductsFetcher extends BaseProduct {
  async call() {
    const products = await this.productRepo.all()
    return products
  }
}

module.exports = AdminProductsFetcher
