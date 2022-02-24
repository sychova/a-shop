const BaseOrdersFetcher = require('../baseOrdersFetcher')

class AdminOrdersFetcher extends BaseOrdersFetcher {
  async call() {
    const orders = await this.orderRepo.all()
    return orders
  }
}

module.exports = AdminOrdersFetcher
