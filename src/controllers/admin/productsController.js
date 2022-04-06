const Joi = require('joi')
const {
  productsFetcher,
  productCreator,
  productFetcher,
  productDelete,
  productRestore,
  productUpdate,
} = require('../../services/products/admin/index')
const { validation } = require('../../middlewares/validation')

const schema = Joi.object({
  name: Joi.string().required().min(2).max(500).messages({
    'string.empty': 'This field is required',
    'string.min':
      'Min characters for this field is 2. Max characters for this field is 500',
    'string.max':
      'Min characters for this field is 2. Max characters for this field is 500',
  }),
  vendorCode: Joi.string().required().alphanum().length(7).messages({
    'string.empty': 'This field is required',
    'string.alphanum': 'Only alphanumeric characters are allowed',
    'string.length': 'This field must be 7 characters long',
  }),
  price: Joi.number().integer().required().min(1).max(9999999).messages({
    'number.base': 'This field is required and must be a number',
    'number.min':
      'Min characters for this field is 1. Max characters for this field is 7',
    'number.max':
      'Min characters for this field is 1. Max characters for this field is 7',
  }),
  description: Joi.string().allow('').max(5000).messages({
    'string.max': 'Max characters for this field is 5000',
  }),
  isDeleted: Joi.string(),
  imagePath: Joi.string().allow(''),
})

const productsList = async (req, res) => {
  const messages = await req.consumeFlash('success')
  const products = await productsFetcher.call()
  res.render('./products/admin/index', { products, messages })
}

const show = async (req, res) => {
  try {
    const { productId } = req.params
    const product = await productFetcher.call(productId)
    res.render('./products/admin/show', { product })
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const newProduct = async (req, res) => {
  res.render('./products/admin/new')
}

const create = async (req, res) => {
  try {
    const productErrors = await validation(schema, req)
    if (productErrors) {
      res.status(400).render('./products/admin/new', {
        errors: productErrors,
        product: req.body,
      })
      return
    }

    await productCreator.call(req.body, req.file)
    await req.flash('success', 'Your product has successfully been created!')
    res.redirect('/admin/products')
  } catch (error) {
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const edit = async (req, res) => {
  try {
    const { productId } = req.params
    const product = await productFetcher.call(productId)
    res.render('./products/admin/edit', {
      productId,
      product,
    })
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const update = async (req, res) => {
  try {
    const productErrors = await validation(schema, req)
    if (productErrors) {
      res.status(400).render('./products/admin/edit', {
        productId: req.params.productId,
        errors: productErrors,
        product: req.body,
      })
      return
    }

    await productUpdate.call(req.params.productId, req.body, req.file)
    res.redirect(`/admin/products/${req.params.productId}`)
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const deleteMultipleProducts = async (req, res) => {
  try {
    await productDelete.call(req.body.ids)
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const restoreMultipleProducts = async (req, res) => {
  try {
    await productRestore.call(req.body.ids)
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

module.exports = {
  productsList,
  show,
  newProduct,
  create,
  edit,
  update,
  deleteMultipleProducts,
  restoreMultipleProducts,
}
