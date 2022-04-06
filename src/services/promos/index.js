const { promoRepo } = require('../../repos')
const PromoChecker = require('./promoChecker')

module.exports = {
  promoChecker: new PromoChecker({ promoRepo }),
}
