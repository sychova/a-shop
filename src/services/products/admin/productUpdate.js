const fs = require('fs')
const path = require('path')
const appRoot = require('app-root-path')
const BaseProduct = require('../baseProduct')

class AdminProductUpdate extends BaseProduct {
  async call(id, params, image) {
    if (image) {
      fs.unlink(
        path.join(appRoot.path, '/public', params.imagePath),
        (error) => {
          if (error) {
            console.error(error)
          }
        },
      )
    }
    await this.productRepo.findById(id)
    await this.productRepo.update(id, {
      name: params.name,
      vendorCode: params.vendorCode,
      price: params.price,
      description: params.description,
      imagePath: image ? `/img/products/${image.filename}` : params.imagePath,
      deletedAt: params.isActive ? null : new Date(),
    })
  }
}

module.exports = AdminProductUpdate
