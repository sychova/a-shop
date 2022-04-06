class ProductsToCart {
  static addToCart = (ids, cart = []) => {
    const productsAmountInCart = ProductsToCart.serializeCartToMap(cart)

    const newProductsAmountInCart = ids.reduce(
      (acc, id) => acc.set(id, (acc.get(id) || 0) + 1),
      productsAmountInCart,
    )

    return ProductsToCart.deserializeMapToCart(newProductsAmountInCart)
  }

  static serializeCartToMap = (cart) => {
    return new Map(cart.map(({ productId, amount }) => [productId, amount]))
  }

  static deserializeMapToCart = (cart) =>
    [...cart.entries()].map(([productId, amount]) => ({
      productId,
      amount,
    }))
}

module.exports = ProductsToCart
