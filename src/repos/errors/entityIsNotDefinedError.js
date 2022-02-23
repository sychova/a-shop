class EntityIsNotDefinedError extends Error {
  constructor(repo) {
    super(`Entity type is not defined for ${repo}`)
  }
}

module.exports = EntityIsNotDefinedError
