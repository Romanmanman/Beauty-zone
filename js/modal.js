const body = document.body;
const modal = document.querySelector('.backdrop');
const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('.close-modal-button');

const toggleModal = () => modal.classList.toggle('is-hidden');
const toggleBody = () => body.classList.toggle('is-open');

openModalButtons.forEach(button => {
  button.addEventListener('click', toggleModal);
});
closeModalButton.addEventListener('click', toggleModal);
openModalButtons.forEach(button => {
  button.addEventListener('click', toggleBody);
});
closeModalButton.addEventListener('click', toggleBody);
