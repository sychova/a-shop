const BaseProduct = require('../baseProduct')

class ProductCreator extends BaseProduct {
  call(params, image) {
    return this.productRepo.create({
      name: params.name,
      vendorCode: params.vendorCode,
      price: params.price,
      description: params.description,
      imagePath: image ? `/img/products/${image.filename}` : null,
      deletedAt: params.isDeleted ? null : new Date(),
    })
  }
}

module.exports = ProductCreator
