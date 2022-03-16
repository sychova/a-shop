const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png']
const path = require('path')
const multer = require('multer')

const imageUpload = () => {
  return multer({
    limits: {
      fileSize: 10485760,
    },
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, './public/img/products/')
      },
      filename(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
      },
    }),
    fileFilter(req, file, cb) {
      const fileExtension = path.extname(file.originalname)
      if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        cb(null, false)
      }
      cb(null, true)
    },
  })
}

module.exports = {
  imageUpload,
}
