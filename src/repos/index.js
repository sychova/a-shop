const knex = require('../utils/knex')
const ProductRepo = require('./productRepo')
const OrderRepo = require('./orderRepo')

const productRepo = new ProductRepo(knex)
const orderRepo = new OrderRepo(knex)

module.exports = {
  productRepo,
  orderRepo,
}
