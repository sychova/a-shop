const Product = require('./product')

class OrderProduct extends Product {
  get amount() {
    return this.attr.amount
  }

  get priceTotal() {
    return this.attr.amount * this.attr.price
  }
}

module.exports = OrderProduct
