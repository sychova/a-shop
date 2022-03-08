const BaseProduct = require('../baseProduct')

class AdminProductFetcher extends BaseProduct {
  async call(id) {
    const product = await this.productRepo.findById(id)
    return product
  }
}

module.exports = AdminProductFetcher
