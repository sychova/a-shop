const { promoCreator } = require('../../services/promos/admin/index')

const newPromo = async (req, res) => {
  const messages = await req.consumeFlash('info')
  res.render('./promos/admin/new', { messages })
}

const create = async (req, res) => {
  try {
    await promoCreator.call(req.body)
    await req.flash('info', 'Your promo code has successfully been created!')
    res.redirect('/admin/promos/new')
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  newPromo,
  create,
}
