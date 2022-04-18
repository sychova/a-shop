const { paginateList } = require('../utils/paginateList')

class Paginator {
  constructor({ repo, baseURL }) {
    this.repo = repo
    this.baseURL = baseURL
  }

  async call(page) {
    const count = await this.repo.countPaginate()
    const pagination = paginateList({ page, url: this.baseURL, count })
    const { data } = await this.repo.paginate({
      offset: pagination.offset,
      limit: pagination.limit,
    })
    return {
      data,
      pagination,
    }
  }

  async callActive(page) {
    const count = await this.repo.countPaginateActive()
    const pagination = paginateList({ page, url: this.baseURL, count })
    const { data } = await this.repo.paginateActive({
      offset: pagination.offset,
      limit: pagination.limit,
    })
    return {
      data,
      pagination,
    }
  }
}

module.exports = Paginator
