const { orderRepo, orderProductRepo } = require('../../../repos')
const AdminOrdersFetcher = require('./ordersFetcher')
const AdminOrderFetcher = require('./orderFetcher')
const AdminOrderProductsFetcher = require('./orderProductsFetcher')

module.exports = {
  ordersFetcher: new AdminOrdersFetcher({ orderRepo }),
  orderFetcher: new AdminOrderFetcher({ orderRepo }),
  orderProductsFetcher: new AdminOrderProductsFetcher({ orderProductRepo }),
}
