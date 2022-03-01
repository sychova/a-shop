const {
  productsFetcher,
  productCreator,
} = require('../../services/products/admin/index')

const productsList = async (req, res) => {
  const messages = await req.consumeFlash('info')
  const products = await productsFetcher.call()
  res.render('./products/admin/index', { products, messages })
}

const show = async (req, res) => {
  res.render('./products/admin/show')
}

const newProduct = async (req, res) => {
  res.render('./products/admin/new')
}

const create = async (req, res) => {
  try {
    await productCreator.call(req.body)
    await req.flash('info', 'Your product has successfully been created!')
    res.redirect('/admin/products')
  } catch (error) {
    res.status(500).json(error)
  }
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
