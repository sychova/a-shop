const BaseProductsFetcher = require('../baseProductsFetcher')

class ProductFetcher extends BaseProductsFetcher {
  async call(id) {
    const product = await this.productRepo.findById(id)
    return product
  }
}

module.exports = ProductFetcher
