const { productRepo } = require('../../../repos')
const AdminProductsFetcher = require('./productsFetcher')
const AdminProductFetcher = require('./productFetcher')
const ProductCreator = require('./productCreator')
const ProductDeleteService = require('./productDeleteService')
const ProductRestoreService = require('./productRestoreService')
const AdminProductUpdate = require('./productUpdate')

module.exports = {
  productsFetcher: new AdminProductsFetcher({ productRepo }),
  productFetcher: new AdminProductFetcher({ productRepo }),
  productCreator: new ProductCreator({ productRepo }),
  productDelete: new ProductDeleteService({ productRepo }),
  productRestore: new ProductRestoreService({ productRepo }),
  productUpdate: new AdminProductUpdate({ productRepo }),
}
