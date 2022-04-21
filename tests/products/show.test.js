const { show: action } = require('../../src/controllers/productsController')
const { productFactory } = require('../helpers/factories')

describe('controllers/products/show', () => {
  let product = null
  let req = null
  let res = null

  describe('renders product/show page', () => {
    beforeEach(async () => {
      product = await productFactory.call()

      req = {
        params: {
          productId: product.id,
        },
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('renders products/show page', async () => {
      await action(req, res)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./products/show', {
        product,
      })
    })
  })

  describe('when product with passed id does not exist', () => {
    beforeEach(async () => {
      req = {
        params: {
          productId: 0,
        },
        cookies: {},
      }
    })

    it('returns 404 status and renders products/notFound page', async () => {
      await action(req, res)

      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenLastCalledWith(404)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./products/notFound', {
        error: 'Entity Product was not found',
      })
    })
  })
})
