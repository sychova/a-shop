const {
  EntityIsNotDefinedError,
  NotFound,
  TableIsNotDefinedError,
} = require('./errors')

class BaseRepo {
  static get Entity() {
    throw new EntityIsNotDefinedError()
  }

  static get table() {
    throw new TableIsNotDefinedError()
  }

  constructor(gateway, deps = {}) {
    this.gateway = gateway
    this.deps = deps
  }

  get query() {
    return this.gateway(this.constructor.table)
  }

  map(r) {
    if (Array.isArray(r)) {
      return r.map((record) => this.map(record))
    }
    return new this.constructor.Entity(r)
  }

  mapOrNull(record) {
    if (!record) return null

    return this.map(record)
  }

  mapOrNotFound(record) {
    return record ? this.map(record) : this.throwNotFound()
  }

  throwNotFound() {
    throw new NotFound(this.constructor.entity.name)
  }

  all() {
    return this.query.select()
  }
}

module.exports = BaseRepo
