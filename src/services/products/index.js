const { productRepo } = require('../../repos')
const ProductsFetcher = require('./productsFetcher')
const ProductFetcher = require('./productFetcher')
const ProductsToCart = require('./productsToCart')
const ProductsInCartUpdateService = require('./productsInCartUpdateService')
const ProductsFromCartDeleteService = require('./productsFromCartDeleteService')

module.exports = {
  productsFetcher: new ProductsFetcher({ productRepo }),
  productFetcher: new ProductFetcher({ productRepo }),
  ProductsToCart,
  productsInCartUpdateService: new ProductsInCartUpdateService({ productRepo }),
  ProductsInCartUpdateService,
  ProductsFromCartDeleteService,
}
