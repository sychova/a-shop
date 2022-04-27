const {
  update: action,
} = require('../../../src/controllers/admin/productsController')
const { productFactory } = require('../../helpers/factories')

describe('controllers/products/update', () => {
  let product = null
  let productUpdated = null
  let req = null
  let res = null
  describe('updates the existing product and redirects to view', () => {
    beforeEach(async () => {
      product = await productFactory.call()

      productUpdated = {
        name: 'Orange',
        vendorCode: 'VENDOR2',
        price: 20,
        description: 'An orange a day keeps the doctor away',
        isDeleted: 'true',
      }

      req = {
        params: {
          productId: product.id,
        },
        body: {
          ...productUpdated,
        },
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
        redirect: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('renders products/show page', async () => {
      await action(req, res)

      expect(res.redirect).toHaveBeenCalledTimes(1)
      expect(res.redirect).toHaveBeenLastCalledWith(
        `/admin/products/${req.params.productId}`,
      )
    })
  })

  describe('doesnt update the product if the data is not valid', () => {
    beforeEach(async () => {
      product = await productFactory.call()

      productUpdated = {
        name: '',
        vendorCode: '',
        price: '',
        description: '',
        isDeleted: '',
      }

      req = {
        params: {
          productId: product.id,
        },
        body: {
          ...productUpdated,
        },
        cookies: {},
      }

      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
        redirect: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('returns 400 status and renders same edit page with errors', async () => {
      await action(req, res)

      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenLastCalledWith(400)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./products/admin/edit', {
        productId: req.params.productId,
        errors: {
          isDeleted: '"isDeleted" is not allowed to be empty',
          name: 'This field is required',
          price: 'This field is required and must be a number',
          vendorCode: 'This field is required',
        },
        product: req.body,
      })
    })
  })
})
