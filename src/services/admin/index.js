const { productRepo } = require('../../repos')
const AdminProductsFetcher = require('./productsFetcher')

module.exports = {
  productsFetcher: new AdminProductsFetcher({ productRepo }),
}
