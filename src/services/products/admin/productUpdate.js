const BaseProduct = require('../baseProduct')

class AdminProductUpdate extends BaseProduct {
  async call(id, params) {
    await this.productRepo.findById(id)
    await this.productRepo.update(id, {
      name: params.name,
      vendorCode: params.vendorCode,
      price: params.price,
      description: params.description,
      deletedAt: params.isActive ? null : new Date(),
    })
  }
}

module.exports = AdminProductUpdate
