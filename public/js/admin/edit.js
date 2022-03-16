const initToolbarEvents = () => {
  document.getElementById('imageDelete').addEventListener('click', () => {
    document.getElementById('image').value = ''
    document.getElementById('imagePath').value = ''
    document
      .getElementById('currentImage')
      .setAttribute('src', '/img/products/stub.png')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initToolbarEvents()
})
