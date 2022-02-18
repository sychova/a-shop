const productsList = async (req, res) => {
  res.render('./products/index')
}

const show = async (req, res) => {
  res.render('./products/show')
}

module.exports = {
  productsList,
  show,
}
