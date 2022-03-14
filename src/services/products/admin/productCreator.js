const BaseProduct = require('../baseProduct')

class ProductCreator extends BaseProduct {
  call(params) {
    try {
      return this.createProduct(params)
    } catch (error) {
      return { error: error.message || error }
    }
  }

  createProduct(params) {
    return this.productRepo.create({
      name: params.name,
      vendorCode: params.vendorCode,
      price: params.price,
      description: params.description,
      imagePath: params.imagePath,
      deletedAt: params.isActive ? null : new Date(),
    })
  }
}

module.exports = ProductCreator
