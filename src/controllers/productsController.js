const {
  productsFetcher,
  productFetcher,
  ProductsToCart,
  productsInCartUpdateService,
} = require('../services/products/index')

const productsList = async (req, res) => {
  const products = await productsFetcher.call()
  let cartCount
  if (req.cookies.cart) {
    const currentCart = JSON.parse(req.cookies.cart)
    const { updatedCart } = await productsInCartUpdateService.call(currentCart)
    if (updatedCart) {
      cartCount = updatedCart.length
      res.clearCookie('cart')
      res.cookie('cart', JSON.stringify(updatedCart))
    } else {
      cartCount = currentCart.length
    }
  }
  res.render('./products/index', { products, cartCount })
}

const show = async (req, res) => {
  try {
    const cartCount = req.cookies.cart
      ? JSON.parse(req.cookies.cart).length
      : null
    const { productId } = req.params
    const product = await productFetcher.call(productId)
    res.render('./products/show', { product, cartCount })
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

const addSingleProduct = async (req, res) => {
  try {
    const currentCart = req.cookies.cart ? JSON.parse(req.cookies.cart) : null
    const products = await ProductsToCart.addToCart(
      [req.params.productId],
      currentCart,
    )
    res.clearCookie('cart')
    res.cookie('cart', JSON.stringify(products))
    res.status(200).redirect(`/products/${req.params.productId}`)
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

const addMultipleProducts = async (req, res) => {
  try {
    const currentCart = JSON.parse(req.cookies.cart)
    const products = await ProductsToCart.addToCart(req.body.ids, currentCart)
    res.clearCookie('cart')
    res.cookie('cart', JSON.stringify(products))
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

module.exports = {
  productsList,
  show,
  addSingleProduct,
  addMultipleProducts,
}
