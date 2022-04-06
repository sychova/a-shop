const BaseOrder = require('../baseOrder')

class AdminOrdersFetcher extends BaseOrder {
  async call() {
    const orders = await this.orderRepo.all()
    return orders
  }
}

module.exports = AdminOrdersFetcher
