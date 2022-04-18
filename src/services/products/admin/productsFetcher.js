const BaseProduct = require('../baseProduct')

class AdminProductsFetcher extends BaseProduct {
  async call(page) {
    const { data, pagination } = await this.paginator.call(page)
    return {
      products: data,
      pagination,
    }
  }
}

module.exports = AdminProductsFetcher
