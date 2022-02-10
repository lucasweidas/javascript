function toggleModal() {
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
}

const btnOpenModal = document.querySelector('#btn-open-modal');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal-box');
const form = document.querySelector('#modal-form');
const inpName = document.querySelector('#input-name');
const inpEmail = document.querySelector('#input-email');
const btnCloseModal = document.querySelector('.fa-xmark');

form.addEventListener('submit', e => {
  e.preventDefault();
  toggleModal();
  inpName.value = '';
  inpEmail.value = '';
});

btnOpenModal.addEventListener('click', toggleModal);

overlay.addEventListener('click', toggleModal);

btnCloseModal.addEventListener('click', toggleModal);
