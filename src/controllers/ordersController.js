const Joi = require('joi')
const {
  productsInCartUpdateService,
  ProductsInCartUpdateService,
  ProductsFromCartDeleteService,
} = require('../services/products/index')
const { orderCreator } = require('../services/orders/index')

const AVAILABILITY_WARNING =
  'Some of the selected products are no longer available. They have been removed from the cart.'

const { validation } = require('../middlewares/validation')

const schema = Joi.object({
  customerName: Joi.string().required().min(1).max(20).messages({
    'string.empty': 'This field is required',
    'string.min':
      'Min characters for this field is 1. Max characters for this field is 20',
    'string.max':
      'Min characters for this field is 1. Max characters for this field is 20',
  }),
  customerEmail: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.empty': 'This field is required',
      'string.email': 'Your email is in a not correct format',
    }),
  selfPickup: Joi.string().allow(''),
  deliveryAddress: Joi.string()
    .when('selfPickup', {
      is: false,
      then: Joi.string().required().min(10),
    })
    .messages({
      'string.empty': 'This field is required',
      'string.min': 'Min characters for this field is 10.',
    }),
  promoId: Joi.string(),
  value: Joi.string(),
  products: Joi.array().min(1).required(),
})

const cart = async (req, res) => {
  try {
    if (!req.cookies.cart) {
      res.render('./orders/cartEmpty')
      return
    }

    const currentCart = JSON.parse(req.cookies.cart)
    const { products, updatedCart } = await productsInCartUpdateService.call(
      currentCart,
    )
    let cartCount
    const error = []
    if (updatedCart) {
      error.push(AVAILABILITY_WARNING)
      if (updatedCart.length !== 0) {
        cartCount = updatedCart.length
        res.clearCookie('cart')
        res.cookie('cart', JSON.stringify(updatedCart))
      }
      res.clearCookie('cart')
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
    if (!req.cookies.cart) {
      res.render('./orders/cartEmpty')
      return
    }

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

    if (products.length === 0) {
      res.clearCookie('cart')
    } else {
      res.clearCookie('cart')
      res.cookie('cart', JSON.stringify(products))
    }
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

  if (products.length === 0) {
    res.clearCookie('cart')
  } else {
    res.clearCookie('cart')
    res.cookie('cart', JSON.stringify(products))
  }

  res.sendStatus(204)
}

const checkout = async (req, res) => {
  try {
    if (!req.cookies.cart) {
      res.render('./orders/cartEmpty')
      return
    }

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
      if (updatedCart.length !== 0) {
        cartCount = updatedCart.length
        res.clearCookie('cart')
        res.cookie('cart', JSON.stringify(updatedCart))
      }
      res.clearCookie('cart')
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
    const orderErrors = await validation(schema, req, { products })
    if (orderErrors) {
      res.status(400).render('./orders/checkout', {
        errors: orderErrors,
        order: req.body,
        products,
        cartTotal,
      })
      return
    }

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
