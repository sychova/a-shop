const {
  newProduct: action,
} = require('../../../src/controllers/admin/productsController')

describe('controllers/products/newProduct', () => {
  let req = null
  let res = null
  describe('renders product/show page', () => {
    beforeEach(async () => {
      req = {
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('renders products/newProduct page', async () => {
      await action(req, res)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./products/admin/new')
    })
  })
})
