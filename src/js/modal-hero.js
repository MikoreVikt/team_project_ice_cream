(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-body]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn2: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-2]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-body]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
