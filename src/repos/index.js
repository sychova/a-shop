const knex = require('../utils/knex')
const ProductRepo = require('./productRepo')
const OrderRepo = require('./orderRepo')
const PromoRepo = require('./promoRepo')

const productRepo = new ProductRepo(knex)
const orderRepo = new OrderRepo(knex)
const promoRepo = new PromoRepo(knex)

module.exports = {
  productRepo,
  orderRepo,
  promoRepo,
}
