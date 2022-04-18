const BaseProduct = require('./baseProduct')

class ProductsFetcher extends BaseProduct {
  async call(page) {
    const { data, pagination } = await this.paginator.callActive(page)
    return {
      products: data,
      pagination,
    }
  }
}

module.exports = ProductsFetcher
