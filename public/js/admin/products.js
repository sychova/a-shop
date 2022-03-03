const selectedProducts = []

const selectProduct = (item) => {
  // eslint-disable-next-line no-param-reassign
  item.checked = true
  const productId = item.dataset.id
  selectedProducts.push(parseInt(productId, 10))
}

const unselectProduct = (item) => {
  // eslint-disable-next-line no-param-reassign
  item.checked = false
  const selectedIndex = selectedProducts.indexOf(parseInt(item, 10))
  selectedProducts.splice(selectedIndex, 1)
}

const initSingleSelectors = () => {
  const singleProduct = document.querySelectorAll('.singleSelect')
  singleProduct.forEach((item) => {
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

const initEvents = () => {
  initSingleSelectors()
  initMultySelectors()
}

document.addEventListener('DOMContentLoaded', initEvents)
