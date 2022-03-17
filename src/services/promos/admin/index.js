const { promoRepo } = require('../../../repos')
const PromoCreator = require('./promoCreator')

module.exports = {
  promoCreator: new PromoCreator({ promoRepo }),
}
