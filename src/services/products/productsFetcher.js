const BaseProduct = require('./baseProduct')

class ProductsFetcher extends BaseProduct {
  async call() {
    const products = await this.productRepo.allActive()
    return products
  }
}

module.exports = ProductsFetcher
