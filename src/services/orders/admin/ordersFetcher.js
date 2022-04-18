const BaseOrder = require('../baseOrder')

class AdminOrdersFetcher extends BaseOrder {
  async call(page) {
    const { data, pagination } = await this.paginator.call(page)
    return {
      orders: data,
      pagination,
    }
  }
}

module.exports = AdminOrdersFetcher
