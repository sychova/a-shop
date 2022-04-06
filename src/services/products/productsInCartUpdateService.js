/* eslint-disable no-param-reassign */
const BaseProduct = require('./baseProduct')

class ProductsInCartUpdateService extends BaseProduct {
  async call(cart) {
    const idsArrCart = cart.map((cartItem) => cartItem.productId)
    const products = await this.productRepo.receiveActiveByIds(idsArrCart)
    const idsArrProducts = products.map((productItem) => productItem.id)
    const updatedCart =
      idsArrCart.length !== idsArrProducts.length
        ? cart.filter((cartItem) => {
            return idsArrProducts.includes(parseInt(cartItem.productId, 10))
          })
        : null
    let cartTotal = 0
    products.forEach((productItem) => {
      cart.forEach((cartItem) => {
        if (parseInt(cartItem.productId, 10) === productItem.id) {
          productItem.amount = cartItem.amount
          productItem.amountTotal = cartItem.amount * productItem.price
          cartTotal += productItem.amountTotal
        }
      })
    })
    return { products, cartTotal, updatedCart }
  }

  static updateAmountInCart(cart, { id, amount }) {
    const cartProductsIds = cart.map((cartItem) => cartItem.productId)
    const isAdded = cartProductsIds.indexOf(id)
    // eslint-disable-next-line no-param-reassign
    cart[isAdded].amount = amount
    return cart
  }
}

module.exports = ProductsInCartUpdateService
