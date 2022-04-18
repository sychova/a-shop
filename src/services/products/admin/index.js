const { productRepo } = require('../../../repos')
const AdminProductsFetcher = require('./productsFetcher')
const AdminProductFetcher = require('./productFetcher')
const ProductCreator = require('./productCreator')
const ProductDeleteService = require('./productDeleteService')
const ProductRestoreService = require('./productRestoreService')
const AdminProductUpdate = require('./productUpdate')
const Paginator = require('../../paginator')

module.exports = {
  productsFetcher: new AdminProductsFetcher({
    paginator: new Paginator({ repo: productRepo, baseURL: '/admin/products' }),
  }),
  productFetcher: new AdminProductFetcher({ productRepo }),
  productCreator: new ProductCreator({ productRepo }),
  productDelete: new ProductDeleteService({ productRepo }),
  productRestore: new ProductRestoreService({ productRepo }),
  productUpdate: new AdminProductUpdate({ productRepo }),
}
