const BaseRepo = require('./baseRepo')
const { Order } = require('../entities')

class OrderRepo extends BaseRepo {
  static get Entity() {
    return Order
  }

  static get table() {
    return 'orders'
  }

  async addProducts(params) {
    const [record] = await this.gateway('orders_products')
      .insert(params)
      .returning('*')
    return this.map(record)
  }
}

module.exports = OrderRepo
