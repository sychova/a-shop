const BaseRepo = require('./baseRepo')
const { Order } = require('../entities')

class OrderRepo extends BaseRepo {
  static get entity() {
    return Order
  }

  static get table() {
    return 'orders'
  }
}

module.exports = OrderRepo
