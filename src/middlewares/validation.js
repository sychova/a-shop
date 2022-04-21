const fs = require('fs')
const path = require('path')
const appRoot = require('app-root-path')

const validation = async (schema, req, additionalPayloadToValidate) => {
  const entityValidation = await schema.validate(
    { ...req.body, ...additionalPayloadToValidate },
    {
      abortEarly: false,
    },
  )
  const entityErrors = {}

  if (req.fileError) entityErrors.file = req.fileError
  if (entityValidation.error) {
    if (req.file)
      fs.unlink(path.join(appRoot.path, req.file.path), (error) => {
        if (error) {
          console.error(error)
        }
      })
    const errors = entityValidation.error.details
    errors.forEach((element) => {
      entityErrors[element.context.label] = element.message
    })
  }

  if (Object.keys(entityErrors).length > 0) return entityErrors

  return null
}

module.exports = {
  validation,
}
