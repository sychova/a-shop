const {
  deleteMultipleProducts: action,
} = require('../../../src/controllers/admin/productsController')
const { productFactory } = require('../../helpers/factories')

describe('controllers/products/delete', () => {
  let product1 = null
  let product2 = null
  let req = null
  let res = null
  describe('updates the existing products to deleted', () => {
    beforeEach(async () => {
      product1 = await productFactory.call({ deletedAt: new Date() })
      product2 = await productFactory.call({ deletedAt: new Date() })

      req = {
        body: {
          ids: [product1.id, product2.id],
        },
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        json: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('updates selected products status', async () => {
      await action(req, res)

      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenLastCalledWith(204)

      expect(res.json).toHaveBeenCalledTimes(1)
    })
  })

  describe('doesnt change products status if submitted ids dont exist', () => {
    beforeEach(async () => {
      req = {
        body: {
          ids: [999999999, 888888888],
        },
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('renders the admin/error page', async () => {
      await action(req, res)

      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenLastCalledWith(500)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./errorAdmin', {
        error: 'Entity Product was not found',
      })
    })
  })
})
