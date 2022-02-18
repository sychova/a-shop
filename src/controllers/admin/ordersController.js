const ordersList = async (req, res) => {
  res.render('./orders/admin/orders')
}

const show = async (req, res) => {
  res.render('./orders/admin/show')
}

module.exports = {
  ordersList,
  show,
}
