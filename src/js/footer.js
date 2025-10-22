//модальне вікно

const openModal = document.querySelector('.footer-open-modal');
const closeModal = document.querySelector('.footer-close-modal');
const backdrop = document.querySelector('.footer-backdrop');

openModal.addEventListener('click', () => {
  backdrop.classList.remove('footer-is-hidden');
});

closeModal.addEventListener('click', () => {
  backdrop.classList.add('footer-is-hidden');
});

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    backdrop.classList.add('footer-is-hidden');
  }
});
