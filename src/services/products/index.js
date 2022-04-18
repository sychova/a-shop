const { productRepo } = require('../../repos')
const ProductsFetcher = require('./productsFetcher')
const ProductFetcher = require('./productFetcher')
const ProductsToCart = require('./productsToCart')
const ProductsInCartUpdateService = require('./productsInCartUpdateService')
const ProductsFromCartDeleteService = require('./productsFromCartDeleteService')
const Paginator = require('../paginator')

module.exports = {
  productsFetcher: new ProductsFetcher({
    paginator: new Paginator({ repo: productRepo, baseURL: '/products' }),
  }),
  productFetcher: new ProductFetcher({ productRepo }),
  ProductsToCart,
  productsInCartUpdateService: new ProductsInCartUpdateService({ productRepo }),
  ProductsInCartUpdateService,
  ProductsFromCartDeleteService,
}
