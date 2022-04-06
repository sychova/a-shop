const BaseRepo = require('./baseRepo')
const { Promo } = require('../entities')

class PromoRepo extends BaseRepo {
  static get Entity() {
    return Promo
  }

  static get table() {
    return 'promos'
  }

  async tryFindByCode(code) {
    const [record] = await this.query.where({ code }).limit(1)
    return this.mapOrNull(record)
  }
}

module.exports = PromoRepo
