const {
  productsFetcher,
  productCreator,
  productFetcher,
} = require('../../services/products/admin/index')

const productsList = async (req, res) => {
  const messages = await req.consumeFlash('info')
  const products = await productsFetcher.call()
  res.render('./products/admin/index', { products, messages })
}

const show = async (req, res) => {
  try {
    const { productId } = req.params
    const product = await productFetcher.call(productId)
    res.render('./products/admin/show', { product })
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
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
    res.status(500).render('./errorAdmin', { error: error.message })
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
