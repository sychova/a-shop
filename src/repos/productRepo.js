const BaseRepo = require('./baseRepo')
const { Product } = require('../entities')

class ProductRepo extends BaseRepo {
  static get Entity() {
    return Product
  }

  static get table() {
    return 'products'
  }

  allActive() {
    return this.query.where({ productStatus: 'active' })
  }

  async findActiveById(id) {
    const [record] = await this.query
      .where({ id, productStatus: 'active' })
      .limit(1)
    return this.mapOrNotFound(record)
  }

  async deleteProducts(ids) {
    const [record] = await this.query
      .whereIn('id', ids)
      .update({
        productStatus: 'deleted',
      })
      .returning('*')
    return this.map(record)
  }

  async restoreProducts(ids) {
    const [record] = await this.query
      .whereIn('id', ids)
      .update({
        productStatus: 'active',
      })
      .returning('*')
    return this.map(record)
  }
}

module.exports = ProductRepo
