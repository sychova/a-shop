const BaseEntity = require('./base')

class Order extends BaseEntity {
  get customerName() {
    return this.attr.customerName
  }

  get customerEmail() {
    return this.attr.customerEmail
  }

  get totalPrice() {
    return this.attr.totalPrice
  }

  get selfPickup() {
    return this.attr.selfPickup
  }

  get deliveryAddress() {
    return this.attr.deliveryAddress
  }
}

module.exports = Order
