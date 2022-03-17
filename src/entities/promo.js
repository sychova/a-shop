const BaseEntity = require('./base')

class Product extends BaseEntity {
  get code() {
    return this.attr.code
  }

  get value() {
    return this.attr.value
  }
}

module.exports = Product
