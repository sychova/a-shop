class ProductsFromCartDeleteService {
  static deleteFromCart(cart, { id }) {
    return cart.filter((cartItem) => {
      return cartItem.productId !== id
    })
  }
}

module.exports = ProductsFromCartDeleteService
