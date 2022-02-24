const { orderRepo } = require('../../../repos')
const AdminOrdersFetcher = require('./ordersFetcher')

module.exports = {
  ordersFetcher: new AdminOrdersFetcher({ orderRepo }),
}
