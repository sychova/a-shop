const {
  productsInCartUpdateService,
  ProductsInCartUpdateService,
  ProductsFromCartDeleteService,
} = require('../services/products/index')
const { orderCreator } = require('../services/orders/index')

const AVAILABILITY_WARNING =
  'Some of the selected products are no longer available. They have been removed from the cart.'

const cart = async (req, res) => {
  try {
    const currentCart = JSON.parse(req.cookies.cart)
    const { products, updatedCart } = await productsInCartUpdateService.call(
      currentCart,
    )
    let cartCount
    const error = []
    if (updatedCart) {
      error.push(AVAILABILITY_WARNING)
      cartCount = updatedCart.length
      res.clearCookie('cart')
      res.cookie('cart', JSON.stringify(updatedCart))
    } else {
      cartCount = currentCart.length
    }

    res.render('./orders/cart', { products, cartCount, error })
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

const cartUpdate = async (req, res) => {
  try {
    const currentCart = JSON.parse(req.cookies.cart)
    let products
    if (req.body.amount <= 0) {
      products = await ProductsFromCartDeleteService.deleteFromCart(
        currentCart,
        {
          id: req.body.id,
        },
      )
    } else {
      products = await ProductsInCartUpdateService.updateAmountInCart(
        currentCart,
        {
          id: req.body.id,
          amount: req.body.amount,
        },
      )
    }

    res.clearCookie('cart')
    res.cookie('cart', JSON.stringify(products))
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

const deleteFromCart = async (req, res) => {
  const currentCart = JSON.parse(req.cookies.cart)
  const products = await ProductsFromCartDeleteService.deleteFromCart(
    currentCart,
    {
      id: req.body.id,
    },
  )
  res.clearCookie('cart')
  res.cookie('cart', JSON.stringify(products))
  res.sendStatus(204)
}

const checkout = async (req, res) => {
  try {
    const currentCart = JSON.parse(req.cookies.cart)
    const success = await req.consumeFlash('success')
    const promoError = await req.consumeFlash('promoError')
    const promo = await req.consumeFlash('promo')
    const { products, cartTotal, updatedCart } =
      await productsInCartUpdateService.call(currentCart)
    let cartCount
    const error = []

    if (updatedCart) {
      error.push(AVAILABILITY_WARNING)
      cartCount = updatedCart.length
      res.clearCookie('cart')
      res.cookie('cart', JSON.stringify(updatedCart))
    } else {
      cartCount = currentCart.length
    }

    res.render('./orders/checkout', {
      products,
      promo: promo[0] ? promo[0] : null,
      cartTotal: promo[0] ? (promo[0].value * cartTotal) / 100 : cartTotal,
      cartCount,
      success: success[0],
      promoError: promoError[0],
      error,
    })
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

const create = async (req, res) => {
  try {
    const currentCart = JSON.parse(req.cookies.cart)
    const { products, cartTotal } = await productsInCartUpdateService.call(
      currentCart,
    )
    await orderCreator.call({ order: req.body, products, cartTotal })
    res.clearCookie('cart')
    res.redirect('/products')
  } catch (error) {
    console.error(error)
    res.status(500).render('./error', { error: error.message })
  }
}

module.exports = {
  cart,
  cartUpdate,
  deleteFromCart,
  checkout,
  create,
}
