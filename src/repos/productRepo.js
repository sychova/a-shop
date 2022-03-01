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
}

module.exports = ProductRepo
