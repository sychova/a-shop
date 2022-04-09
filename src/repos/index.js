const knex = require('../utils/knex')
const ProductRepo = require('./productRepo')
const OrderRepo = require('./orderRepo')
const PromoRepo = require('./promoRepo')
const OrderProductRepo = require('./orderProductRepo')

const productRepo = new ProductRepo(knex)
const orderRepo = new OrderRepo(knex)
const promoRepo = new PromoRepo(knex)
const orderProductRepo = new OrderProductRepo(knex)

module.exports = {
  productRepo,
  orderRepo,
  promoRepo,
  orderProductRepo,
}
