const BaseProductsFetcher = require('./baseProductsFetcher')

class ProductsFetcher extends BaseProductsFetcher {
  async call() {
    const products = await this.productRepo.allActive()
    return products
  }
}

module.exports = ProductsFetcher
