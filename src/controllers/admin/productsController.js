const {
  productsFetcher,
  productCreator,
  productFetcher,
  productDelete,
  productRestore,
  productUpdate,
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
  try {
    const { productId } = req.params
    const product = await productFetcher.call(productId)
    res.render('./products/admin/edit', { product })
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const update = async (req, res) => {
  try {
    await productUpdate.call(req.params.productId, req.body)
    res.redirect(`/admin/products/${req.params.productId}`)
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const deleteSingleProduct = async (req, res) => {
  try {
    await productDelete.call([req.params.productId])
    res.redirect('/admin/products')
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const deleteMultipleProducts = async (req, res) => {
  try {
    await productDelete.call(req.body.ids)
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const restoreSingleProduct = async (req, res) => {
  try {
    await productRestore.call([req.params.productId])
    res.redirect('/admin/products')
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

const restoreMultipleProducts = async (req, res) => {
  try {
    await productRestore.call(req.body.ids)
    res.status(204).json()
  } catch (error) {
    console.error(error)
    res.status(500).render('./errorAdmin', { error: error.message })
  }
}

module.exports = {
  productsList,
  show,
  newProduct,
  create,
  edit,
  update,
  deleteSingleProduct,
  deleteMultipleProducts,
  restoreSingleProduct,
  restoreMultipleProducts,
}
