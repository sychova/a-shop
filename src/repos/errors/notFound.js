class NotFound extends Error {
  constructor(type) {
    super(`Entity ${type} was not found`)
  }
}

module.exports = NotFound
