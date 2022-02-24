const BaseProductsFetcher = require('../baseProductsFetcher')

class AdminProductsFetcher extends BaseProductsFetcher {
  async call() {
    const products = await this.productRepo.all()
    return products
  }
}

module.exports = AdminProductsFetcher
