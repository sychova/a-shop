const BaseProductsFetcher = require('./baseProductsFetcher')

class ProductFetcher extends BaseProductsFetcher {
  async call(id) {
    const product = await this.productRepo.findActiveById(id)
    return product
  }
}

module.exports = ProductFetcher
