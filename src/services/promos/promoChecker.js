const BasePromo = require('./basePromo')

class PromoChecker extends BasePromo {
  call(code) {
    return this.promoRepo.tryFindByCode(code)
  }
}

module.exports = PromoChecker
