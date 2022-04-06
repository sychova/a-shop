const BaseRepo = require('./baseRepo')
const { Product } = require('../entities')

class ProductRepo extends BaseRepo {
  static get Entity() {
    return Product
  }

  static get table() {
    return 'products'
  }

  getActive() {
    return this.query.whereNull('deletedAt')
  }

  receiveActiveByIds(ids) {
    return this.query.whereIn('id', ids).whereNull('deletedAt')
  }

  async findActiveById(id) {
    const [record] = await this.query
      .where({ id })
      .whereNull('deletedAt')
      .limit(1)
    return this.mapOrNotFound(record)
  }

  async deleteProducts(ids) {
    const [record] = await this.query
      .whereIn('id', ids)
      .update({
        deletedAt: new Date(),
      })
      .returning('*')
    return this.map(record)
  }

  async restoreProducts(ids) {
    const [record] = await this.query
      .whereIn('id', ids)
      .update({
        deletedAt: null,
      })
      .returning('*')
    return this.map(record)
  }
}

module.exports = ProductRepo
