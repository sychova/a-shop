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

  get paginationQuery() {
    return this.query.clone()
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
    throw new NotFound(this.constructor.Entity.name)
  }

  all() {
    return this.query.select()
  }

  async findById(id) {
    const [record] = await this.query.where({ id }).limit(1)
    return this.mapOrNotFound(record)
  }

  async create(params) {
    const [record] = await this.query.insert(params).returning('*')
    return this.map(record)
  }

  async update(id, params) {
    const [record] = await this.query
      .where({ id })
      .update(params)
      .returning('*')
    return this.map(record)
  }

  async paginate({ offset, limit }) {
    const records = await this.paginationQuery
      .orderBy('id', 'desc')
      .offset(offset)
      .limit(limit)
    return {
      data: this.map(records),
    }
  }

  async countPaginate() {
    const [{ count }] = await this.paginationQuery.count('*')
    return parseInt(count, 10)
  }
}

module.exports = BaseRepo
