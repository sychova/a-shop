class BaseProduct {
  constructor({ productRepo, paginator }) {
    this.productRepo = productRepo
    this.paginator = paginator
  }
}

module.exports = BaseProduct
