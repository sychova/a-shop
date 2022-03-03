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
    return this.query.where({ product_status: 'active' })
  }

  async create(product) {
    const [record] = await this.query
      .insert({
        name: product.productName,
        vendorCode: product.vendorCode,
        price: product.productPrice,
        description: product.productDescription,
        imagePath: product.imagePath,
        productStatus: product.productStatus,
      })
      .returning('*')
    return this.map(record)
  }

  async findById(id) {
    const [record] = await this.query.where({ id }).limit(1)
    return this.mapOrNotFound(record)
  }

  async findActiveById(id) {
    const [record] = await this.query
      .where({ id, productStatus: 'active' })
      .limit(1)
    return this.mapOrNotFound(record)
  }
}

module.exports = ProductRepo
