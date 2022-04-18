const { orderRepo, orderProductRepo } = require('../../../repos')
const AdminOrdersFetcher = require('./ordersFetcher')
const AdminOrderFetcher = require('./orderFetcher')
const AdminOrderProductsFetcher = require('./orderProductsFetcher')
const Paginator = require('../../paginator')

module.exports = {
  ordersFetcher: new AdminOrdersFetcher({
    paginator: new Paginator({ repo: orderRepo, baseURL: '/admin/orders' }),
  }),
  orderFetcher: new AdminOrderFetcher({ orderRepo }),
  orderProductsFetcher: new AdminOrderProductsFetcher({ orderProductRepo }),
}
