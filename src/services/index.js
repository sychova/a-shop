const { productRepo } = require('../repos')
const ProductsFetcher = require('./productsFetcher')

module.exports = {
  productsFetcher: new ProductsFetcher({ productRepo }),
}
