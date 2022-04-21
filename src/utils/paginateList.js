const paginateList = ({ page, url, count, limit = 10 }) => {
  if (!page || page <= 0) {
    return paginateList({ page: 1, url, count, limit })
  }
  return {
    pageCurrent: page,
    pagePrevious: page !== 1 && `${url}?page=${page - 1}`,
    pageNext: Math.ceil(count / limit) > page && `${url}?page=${page + 1}`,
    offset: limit * (page - 1),
    limit,
  }
}

module.exports = { paginateList }
