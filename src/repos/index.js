const knex = require('../utils/knex')
const ProductRepo = require('./productRepo')

const productRepo = new ProductRepo(knex)

module.exports = {
  productRepo,
}
