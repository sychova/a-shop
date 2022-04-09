const BaseRepo = require('./baseRepo')
const { OrderProduct } = require('../entities')

class OrderProductRepo extends BaseRepo {
  static get Entity() {
    return OrderProduct
  }

  static get table() {
    return 'orders_products'
  }

  async getProductsByOrderId(id) {
    const record = await this.query
      .join('products', 'orders_products.productId', 'products.id')
      .where({ orderId: id })
      .select(
        'products.name',
        'products.vendorCode',
        'orders_products.amount',
        'orders_products.price',
      )
    return this.map(record)
  }
}

module.exports = OrderProductRepo
