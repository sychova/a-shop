const {
  ordersFetcher,
  orderFetcher,
  orderProductsFetcher,
} = require('../../services/orders/admin/index')

const ordersList = async (req, res) => {
  const orders = await ordersFetcher.call()
  res.render('./orders/admin/orders', { orders })
}

const show = async (req, res) => {
  try {
    const order = await orderFetcher.call(req.params.orderId)
    const products = await orderProductsFetcher.call(req.params.orderId)
    res.render('./orders/admin/show', { order, products })
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

module.exports = {
  ordersList,
  show,
}
