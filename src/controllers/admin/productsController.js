const { productsFetcher } = require('../../services/products/admin/index')

const productsList = async (req, res) => {
  const products = await productsFetcher.call()
  res.render('./products/admin/index', { products })
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
