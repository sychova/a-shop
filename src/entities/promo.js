const BaseEntity = require('./base')

class Promo extends BaseEntity {
  get code() {
    return this.attr.code
  }

  get value() {
    return this.attr.value
  }
}

module.exports = Promo
