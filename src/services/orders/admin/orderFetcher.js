const BaseOrder = require('../baseOrder')

class AdminOrderFetcher extends BaseOrder {
  async call(id) {
    return this.orderRepo.findById(id)
  }
}

module.exports = AdminOrderFetcher
