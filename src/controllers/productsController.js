const { productsFetcher } = require('../services/products/index')

const productsList = async (req, res) => {
  const products = await productsFetcher.call()
  res.render('./products/index', { products })
}

const show = async (req, res) => {
  res.render('./products/show')
}

module.exports = {
  productsList,
  show,
}
