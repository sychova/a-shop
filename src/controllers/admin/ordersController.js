const { ordersFetcher } = require('../../services/orders/admin/index')

const ordersList = async (req, res) => {
  const orders = await ordersFetcher.call()
  res.render('./orders/admin/orders', { orders })
}

const show = async (req, res) => {
  res.render('./orders/admin/show')
}

module.exports = {
  ordersList,
  show,
}
