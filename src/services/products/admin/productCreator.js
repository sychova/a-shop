class ProductCreator {
  constructor({ productRepo }) {
    this.productRepo = productRepo
  }

  call(product) {
    try {
      return this.createProduct(product)
    } catch (error) {
      return { error: error.message || error }
    }
  }

  createProduct(product) {
    return this.productRepo.create(product)
  }
}

module.exports = ProductCreator
