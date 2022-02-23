const BaseRepo = require('./baseRepo')
const { Product } = require('../entities')

class ProductRepo extends BaseRepo {
  static get entity() {
    return Product
  }

  static get table() {
    return 'products'
  }

  all() {
    return this.query.select()
  }

  allActive() {
    return this.query.where({ product_status: 'active' })
  }
}

module.exports = ProductRepo
