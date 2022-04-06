const { orderRepo } = require('../../repos')
const OrderCreator = require('./orderCreator')

module.exports = {
  orderCreator: new OrderCreator({ orderRepo }),
}
