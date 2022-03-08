const BaseProduct = require('./baseProduct')

class ProductFetcher extends BaseProduct {
  async call(id) {
    const product = await this.productRepo.findActiveById(id)
    return product
  }
}

module.exports = ProductFetcher
