const initToolbarEvents = () => {
  document.getElementById('imageDelete').addEventListener('click', () => {
    document.getElementById('image').value = ''
  })
}

const initTableEvents = () => {
  initToolbarEvents()
}

document.addEventListener('DOMContentLoaded', () => {
  initTableEvents()
})
