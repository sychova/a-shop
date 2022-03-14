const BaseEntity = require('./base')

class Product extends BaseEntity {
  get name() {
    return this.attr.name
  }

  get vendorCode() {
    return this.attr.vendorCode
  }

  get price() {
    return this.attr.price
  }

  get description() {
    return this.attr.description
  }

  get imagePath() {
    return this.attr.imagePath
  }

  get deletedAt() {
    return this.attr.deletedAt
  }
}

module.exports = Product
