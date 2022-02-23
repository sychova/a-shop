class TableIsNotDefinedError extends Error {
  constructor(repo) {
    super(`Table is not defined for ${repo}`)
  }
}

module.exports = TableIsNotDefinedError
