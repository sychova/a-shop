const initTableEvents = () => {
  const amountDecrease = document.querySelectorAll('.amountDecrease')
  amountDecrease.forEach((element) => {
    element.addEventListener('click', async () => {
      const amount = element.parentNode.querySelector('.amountEdit')
      amount.value = parseInt(amount.value, 10) - 1
      amount.dispatchEvent(new Event('input'))
    })
  })

  const amountIncrease = document.querySelectorAll('.amountIncrease')
  amountIncrease.forEach((element) => {
    element.addEventListener('click', async () => {
      const amount = element.parentNode.querySelector('.amountEdit')
      amount.value = parseInt(amount.value, 10) + 1
      amount.dispatchEvent(new Event('input'))
    })
  })

  const amountEdit = document.querySelectorAll('.amountEdit')
  amountEdit.forEach((element) => {
    element.addEventListener('input', async () => {
      await fetch('/api/orders/new/cart/update', {
        redirect: 'manual',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: element.dataset.id,
          amount: parseInt(element.value, 10),
        }),
      })
      window.location.href = '/orders/new/cart'
    })
  })

  const removeItem = document.querySelectorAll('.delete')
  removeItem.forEach((element) => {
    element.addEventListener('click', async () => {
      await fetch('/api/orders/new/cart/delete', {
        redirect: 'manual',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: element.dataset.id,
        }),
      })
      window.location.href = '/orders/new/cart'
    })
  })
}

const initEvents = () => {
  initTableEvents()
}

document.addEventListener('DOMContentLoaded', initEvents)
