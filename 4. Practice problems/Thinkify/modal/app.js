const modalDiv = document.querySelector('.overlay')

const showModal = () => modalDiv.classList.add('show-modal')
const closeModal = () => modalDiv.classList.remove('show-modal')

modalDiv.addEventListener('click', function (e) {
  if (e.target === modalDiv) closeModal()
})
