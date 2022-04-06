const BaseOrder = require('./baseOrder')

class OrderCreator extends BaseOrder {
  async call({ order, products, cartTotal }) {
    const savedOrder = await this.createOrder(order, cartTotal)
    await this.addOrderProducts(savedOrder.id, products)
  }

  async createOrder(order, cartTotal) {
    const newOrder = {
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      promoId: parseInt(order.promoId, 10) || null,
      totalPrice: parseInt(order.promoId, 10)
        ? (parseInt(order.value, 10) * cartTotal) / 100
        : cartTotal,
      deliveryMethod: order.deliveryMethod,
      deliveryAddress: order.deliveryAddress,
    }
    return this.orderRepo.create(newOrder)
  }

  async addOrderProducts(orderId, products) {
    const orderProducts = products.map((productItem) => {
      return {
        orderId,
        productId: productItem.id,
        price: productItem.price,
        amount: productItem.amount,
      }
    })
    return this.orderRepo.addProducts(orderProducts)
  }
}

module.exports = OrderCreator
