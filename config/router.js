const { Router } = require('express')
const { singleImageUpload } = require('../src/middlewares/imageUpload')

const user = require('../src/controllers')
const admin = require('../src/controllers/admin')

const router = new Router()

router.get('/', (req, res) => {
  res.redirect('/products')
})
router.get('/products', user.products.productsList)
router.get('/products/:productId', user.products.show)

router.get('/admin', (req, res) => {
  res.redirect('/admin/products')
})
router.get('/admin/products', admin.products.productsList)
router.get('/admin/products/new', admin.products.newProduct)
router.post('/admin/products', singleImageUpload, admin.products.create)
router.get('/admin/products/:productId', admin.products.show)
router.get('/admin/products/:productId/edit', admin.products.edit)
router.post(
  '/admin/products/:productId/update',
  singleImageUpload,
  admin.products.update,
)
router.post(
  '/admin/products/:productId/delete',
  admin.products.deleteSingleProduct,
)
router.delete('/api/admin/products', admin.products.deleteMultipleProducts)
router.post(
  '/admin/products/:productId/restore',
  admin.products.restoreSingleProduct,
)
router.post(
  '/api/admin/products/restore',
  admin.products.restoreMultipleProducts,
)

router.get('/orders/new/cart', user.orders.cart)
router.get('/orders/new/checkout', user.orders.checkout)
router.post('/orders', user.orders.create)

router.get('/admin/orders', admin.orders.ordersList)
router.get('/admin/orders/:orderId', admin.orders.show)

router.get('/admin/promos/new', admin.promos.newPromo)
router.post('/admin/promos', admin.promos.create)

module.exports = router
