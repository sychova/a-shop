const { productRepo } = require('../../../repos')
const AdminProductsFetcher = require('./productsFetcher')
const ProductCreator = require('./productCreator')

module.exports = {
  productsFetcher: new AdminProductsFetcher({ productRepo }),
  productCreator: new ProductCreator({ productRepo }),
}
