const form = document.querySelector('#form');
const formButton = document.querySelector('#button');
const modalButtonAll = document.querySelectorAll('.modal__button');
const modalContainer = document.querySelector('.modal')

function openModal(event) {
  modalContainer.classList.remove('modal--off');
  if (!form.checkValidity()) {
    modal = document.querySelector('.modal__review--error')
  } else {
    modal = document.querySelector('.modal__review--sent')
  }
  modal.style.display = 'flex';
  event.preventDefault();
}

function closeModal(event) {
  modalContainer.classList.add('modal--off');
  modal.style.display = 'none';
}

formButton.addEventListener('click', openModal);
for (let i = 0; i < modalButtonAll.length; i++) {
  modalButtonAll[i].addEventListener('click', closeModal);
}
