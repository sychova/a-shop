const BaseOrder = require('../baseOrder')

class AdminOrderProductsFetcher extends BaseOrder {
  async call(id) {
    return this.orderProductRepo.getProductsByOrderId(id)
  }
}

module.exports = AdminOrderProductsFetcher
