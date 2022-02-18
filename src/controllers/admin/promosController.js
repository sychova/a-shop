const newPromo = async (req, res) => {
  res.render('./promos/admin/promos')
}

const create = async (req, res) => {
  res.send('NOT IMPLEMENTED: Creating promo')
}

module.exports = {
  newPromo,
  create,
}
