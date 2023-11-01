const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const openButton = document.getElementById('btn-modal');
const closeButton = document.getElementById('close');

openButton.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImage.src = './img/img-1.png';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
