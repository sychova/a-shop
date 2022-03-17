const BaseRepo = require('./baseRepo')
const { Promo } = require('../entities')

class PromoRepo extends BaseRepo {
  static get Entity() {
    return Promo
  }

  static get table() {
    return 'promos'
  }
}

module.exports = PromoRepo
