const BasePromo = require('../basePromo')

class PromoCreator extends BasePromo {
  call(promo) {
    return this.createPromo(promo)
  }

  createPromo(promo) {
    return this.promoRepo.create(promo)
  }
}

module.exports = PromoCreator
