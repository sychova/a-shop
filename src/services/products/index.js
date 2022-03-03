const { productRepo } = require('../../repos')
const ProductsFetcher = require('./productsFetcher')
const ProductFetcher = require('./productFetcher')

module.exports = {
  productsFetcher: new ProductsFetcher({ productRepo }),
  productFetcher: new ProductFetcher({ productRepo }),
}
