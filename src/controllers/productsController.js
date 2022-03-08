const {
  productsFetcher,
  productFetcher,
} = require('../services/products/index')

const productsList = async (req, res) => {
  const messages = await req.consumeFlash('info')
  const products = await productsFetcher.call()
  res.render('./products/index', { products, messages })
}

const show = async (req, res) => {
  try {
    const { productId } = req.params
    const product = await productFetcher.call(productId)
    res.render('./products/show', { product })
  } catch (error) {
    console.error(error)
    res.status(500).render('/error')
  }
}

module.exports = {
  productsList,
  show,
}
