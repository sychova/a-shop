const { productRepo } = require('../../../repos')
const AdminProductsFetcher = require('./productsFetcher')
const AdminProductFetcher = require('./productFetcher')
const ProductCreator = require('./productCreator')

module.exports = {
  productsFetcher: new AdminProductsFetcher({ productRepo }),
  productFetcher: new AdminProductFetcher({ productRepo }),
  productCreator: new ProductCreator({ productRepo }),
}
