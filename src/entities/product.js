const BaseEntity = require('./base')

class Product extends BaseEntity {
  get name() {
    return this.attr.name
  }

  get vendor() {
    return this.attr.vendor
  }

  get price() {
    return this.attr.price
  }

  get description() {
    return this.attr.description
  }
}

module.exports = Product
