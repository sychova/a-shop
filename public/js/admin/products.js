/* eslint-disable no-param-reassign */

const initMultiSelectors = () => {
  const productList = document.querySelectorAll('.singleSelect')
  const multProducts = document.querySelector('.multSelect')
  multProducts.addEventListener('click', () => {
    console.log(multProducts.checked)
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
  document.getElementById('delete').addEventListener('click', async () => {
    const ids = checkSelected()
    await fetch('/api/admin/products', {
      redirect: 'manual',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }),
    })
    window.location.href = '/admin/products'
  })
  document.getElementById('restore').addEventListener('click', async () => {
    const ids = checkSelected()
    await fetch('/api/admin/products/restore', {
      redirect: 'manual',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }),
    })
    window.location.href = '/admin/products'
  })
}

const initEvents = () => {
  initMultiSelectors()
  initToolbarEvents()
}

document.addEventListener('DOMContentLoaded', initEvents)
