const BaseProduct = require('../baseProduct')

class ProductCreator extends BaseProduct {
  call(params, image) {
    try {
      return this.productRepo.create({
        name: params.name,
        vendorCode: params.vendorCode,
        price: params.price,
        description: params.description,
        imagePath: image ? `/img/products/${image.filename}` : null,
        deletedAt: params.isActive ? null : new Date(),
      })
    } catch (error) {
      return { error: error.message || error }
    }
  }
}

module.exports = ProductCreator
