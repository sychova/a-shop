const { promoChecker } = require('../services/promos')

const PROMO_ERROR = 'Sorry your promo code is incorrect or not valid anymore.'
const PROMO_SUCCESS = 'Promo code successfully applied!'

const checkAvailability = async (req, res) => {
  try {
    const promo = await promoChecker.call(req.body.codeValue)
    if (promo) {
      await req.flash('promo', promo)
      await req.flash('success', PROMO_SUCCESS)
    } else {
      await req.flash('promoError', PROMO_ERROR)
    }

    res.redirect('/orders/new/checkout')
  } catch (error) {
    res.status(500).render('./error', { error: error.message })
  }
}

module.exports = {
  checkAvailability,
}
