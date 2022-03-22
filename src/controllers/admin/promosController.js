const Joi = require('joi')
const { promoCreator } = require('../../services/promos/admin/index')
const { validation } = require('../../middlewares/validation')

const schema = Joi.object({
  code: Joi.string().alphanum().length(7).required().messages({
    'string.empty': 'The Code is required',
    'string.alphanum': 'The Code must be alphanumeric type',
    'string.length': 'The Code must be 7 characters long',
  }),
  value: Joi.number().integer().min(1).max(100).required().messages({
    'number.base': 'The Value is required and must be a number',
    'number.min':
      'Min value for the Value is 1. Max value for this field is 100',
    'number.max':
      'Min value for the Value is 1. Max value for this field is 100',
  }),
})

const newPromo = async (req, res) => {
  const success = await req.consumeFlash('success')
  res.render('./promos/admin/new', {
    success,
  })
}

const create = async (req, res) => {
  try {
    const promoErrors = await validation(schema, req)
    if (promoErrors) {
      res.status(400).render('./promos/admin/new', {
        errors: promoErrors,
        promo: req.body,
      })
      return
    }

    await promoCreator.call(req.body)
    await req.flash('success', 'Your promo code has successfully been created!')
    res.redirect('/admin/promos/new')
  } catch (error) {
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

module.exports = {
  newPromo,
  create,
}
