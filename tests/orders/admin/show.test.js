const {
  show: action,
} = require('../../../src/controllers/admin/ordersController')
const { orderProductRepo } = require('../../../src/repos')
const {
  productFactory,
  orderFactory,
  orderProductFactory,
} = require('../../helpers/factories')

describe('controllers/orders/show', () => {
  let product = null
  let order = null
  let products = null
  let req = null
  let res = null

  describe('renders order/show page', () => {
    beforeEach(async () => {
      product = await productFactory.call()

      order = await orderFactory.call()

      await orderProductFactory.call([
        {
          orderId: order.id,
          productId: product.id,
          price: product.price,
          amount: 1,
        },
      ])

      products = await orderProductRepo.getProductsByOrderId(order.id)

      req = {
        params: {
          orderId: order.id,
        },
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('renders orders/show page', async () => {
      await action(req, res)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./orders/admin/show', {
        order,
        products,
      })
    })
  })

  describe('when order with passed id does not exist', () => {
    beforeEach(async () => {
      req = {
        params: {
          orderId: 0,
        },
        cookies: {},
      }
    })

    it('returns 404 status and renders order/notFound page', async () => {
      await action(req, res)

      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenLastCalledWith(404)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./orders/notFound', {
        error: 'Entity Order was not found',
      })
    })
  })
})
