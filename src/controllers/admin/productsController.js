const productsList = async (req, res) => {
  res.render('./products/admin/index')
}

const show = async (req, res) => {
  res.render('./products/admin/show')
}

const newProduct = async (req, res) => {
  res.render('./products/admin/new')
}

const create = async (req, res) => {
  res.send('NOT IMPLEMENTED: Creating product')
}

const edit = async (req, res) => {
  res.render('./products/admin/edit')
}

const update = async (req, res) => {
  res.send('NOT IMPLEMENTED: Updating product')
}

module.exports = {
  productsList,
  show,
  newProduct,
  create,
  edit,
  update,
}
