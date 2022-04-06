/* eslint-disable no-param-reassign */

const initMultiSelectors = () => {
  const productList = document.querySelectorAll('.singleSelect')
  const multProducts = document.querySelector('.multSelect')
  multProducts.addEventListener('click', () => {
    productList.forEach((item) => {
      if (multProducts.checked) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
  })
}

const checkSelected = () => {
  const productList = document.querySelectorAll('.singleSelect')
  const selectedProducts = []
  productList.forEach((item) => {
    if (item.checked) selectedProducts.push(item.dataset.id)
  })
  return selectedProducts
}

const initToolbarEvents = () => {
  document.getElementById('addToCart').addEventListener('click', async () => {
    const ids = checkSelected()
    await fetch('/api/products/add', {
      redirect: 'manual',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }),
    })
    window.location.href = '/products'
  })
}

const initEvents = () => {
  initMultiSelectors()
  initToolbarEvents()
}

document.addEventListener('DOMContentLoaded', initEvents)
