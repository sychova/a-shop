const {
  create: action,
} = require('../../../src/controllers/admin/productsController')

describe('controllers/products/create', () => {
  let product = null
  let req = null
  let res = null
  let errors = null
  describe('creates new product and redirects to list', () => {
    beforeEach(async () => {
      product = {
        name: 'Apple',
        vendorCode: 'VENDOR1',
        price: 10,
        description: 'An apple a day keeps the doctor away',
        isDeleted: 'true',
      }

      req = {
        body: {
          ...product,
        },
        flash: jest.fn(() => res),
      }
      res = {
        status: jest.fn(() => res),
        redirect: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('renders products/list page', async () => {
      await action(req, res)

      expect(req.flash).toHaveBeenCalledTimes(1)
      expect(req.flash).toHaveBeenLastCalledWith(
        'success',
        'Your product has successfully been created!',
      )
      expect(res.redirect).toHaveBeenLastCalledWith('/admin/products')
    })
  })

  describe('doesnt create a product if the data is not valid', () => {
    beforeEach(async () => {
      product = {
        name: '',
        vendorCode: '',
        price: '',
        description: '',
        isDeleted: '',
      }

      errors = {
        isDeleted: '"isDeleted" is not allowed to be empty',
        name: 'This field is required',
        price: 'This field is required and must be a number',
        vendorCode: 'This field is required',
      }

      req = {
        body: {
          ...product,
        },
        flash: jest.fn(() => res),
      }
      res = {
        status: jest.fn(() => res),
        render: jest.fn(() => res),
        redirect: jest.fn(() => res),
      }
    })

    afterEach(() => jest.clearAllMocks())

    it('returns 400 status and renders same page with errors', async () => {
      await action(req, res)

      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenLastCalledWith(400)

      expect(res.render).toHaveBeenCalledTimes(1)
      expect(res.render).toHaveBeenLastCalledWith('./products/admin/new', {
        product,
        errors,
      })
    })
  })
})
