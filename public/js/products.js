const selectedProducts = []

const buttonsMultiSelectState = () => {
  if (selectedProducts.length > 1) {
    document.getElementById('view').disabled = true
    document.getElementById('edit').disabled = true
    return
  }

  document.getElementById('view').disabled = false
  document.getElementById('edit').disabled = false
}

const selectProduct = (item) => {
  // eslint-disable-next-line no-param-reassign
  item.checked = true
  const productId = item.dataset.id
  const selectedIndex = selectedProducts.indexOf(parseInt(productId, 10))
  if (selectedIndex < 0) {
    selectedProducts.push(parseInt(productId, 10))
    buttonsMultiSelectState()
  }
}

const unselectProduct = (item) => {
  // eslint-disable-next-line no-param-reassign
  item.checked = false
  const selectedIndex = selectedProducts.indexOf(parseInt(item, 10))
  selectedProducts.splice(selectedIndex, 1)
  buttonsMultiSelectState()
}

const initSingleSelectors = () => {
  const productList = document.querySelectorAll('.singleSelect')
  productList.forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.checked) return unselectProduct(item)
      return selectProduct(item)
    })
  })
}

const initMultySelectors = () => {
  const productList = document.querySelectorAll('.singleSelect')
  const multProducts = document.querySelector('.multSelect')
  multProducts.addEventListener('click', () => {
    productList.forEach((item) => {
      if (!multProducts.checked) return unselectProduct(item)
      return selectProduct(item)
    })
  })
}

const initTableEvents = () => {
  initSingleSelectors()
  initMultySelectors()
}

document.addEventListener('DOMContentLoaded', () => {
  initTableEvents()
})
