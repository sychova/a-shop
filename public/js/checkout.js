const deliveryAddress = document.getElementById('deliveryAddress')
document.getElementById('self').addEventListener('click', () => {
  deliveryAddress.disabled = true
})
document.getElementById('address').addEventListener('click', () => {
  deliveryAddress.disabled = false
})
