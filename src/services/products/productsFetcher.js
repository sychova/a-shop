const BaseProduct = require('./baseProduct')

class ProductsFetcher extends BaseProduct {
  async call() {
    const products = await this.productRepo.getActive()
    return products
  }
}

module.exports = ProductsFetcher
